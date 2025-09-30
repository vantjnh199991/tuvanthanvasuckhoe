
import React, { useState, useMemo, useCallback } from 'react';
import { SYMPTOM_GROUPS } from './constants';
import { AnalysisResult } from './types';
import { analyzeSymptomsWithGemini } from './services/geminiService';
import ResultSection from './components/ResultSection';
import { Leaf, ScrollText, Heart, Shield, Droplet, Package, Camera, Loader2 } from './components/Icons';

const App: React.FC = () => {
    const [checkedSymptoms, setCheckedSymptoms] = useState<Record<string, boolean>>({});
    const [freeTextSymptoms, setFreeTextSymptoms] = useState('');
    const [tongueImage, setTongueImage] = useState<string | null>(null);
    const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleCheckboxChange = useCallback((groupId: string, symptom: string) => {
        const key = `${groupId}|${symptom}`;
        setCheckedSymptoms(prev => ({
            ...prev,
            [key]: !prev[key],
        }));
    }, []);

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file && file.size < 5 * 1024 * 1024) { // Limit 5MB
            const reader = new FileReader();
            reader.onloadend = () => {
                setTongueImage(reader.result as string);
                setError('');
            };
            reader.readAsDataURL(file);
        } else if (file) {
            setError('Kích thước ảnh quá lớn. Vui lòng chọn ảnh dưới 5MB.');
            setTongueImage(null);
            event.target.value = ''; // Reset file input
        }
    };
    
    const selectedSymptomsList = useMemo(() => {
        return Object.keys(checkedSymptoms).filter(key => checkedSymptoms[key]).map(key => {
            const [groupId, symptom] = key.split('|');
            const groupTitle = SYMPTOM_GROUPS.find(g => g.id === groupId)?.title || 'Khác';
            return `${symptom} (${groupTitle})`;
        });
    }, [checkedSymptoms]);

    const handleAnalyze = async () => {
        if (selectedSymptomsList.length === 0 && freeTextSymptoms.trim() === '' && !tongueImage) {
            setError('Vui lòng chọn, nhập ít nhất một triệu chứng, hoặc tải ảnh lưỡi.');
            return;
        }

        setLoading(true);
        setError('');
        setAnalysisResult(null);

        try {
            const fullResponse = await analyzeSymptomsWithGemini(selectedSymptomsList, freeTextSymptoms, tongueImage);
            setAnalysisResult(fullResponse.results);
        } catch (e) {
            if (e instanceof Error) {
                setError(e.message);
            } else {
                setError('An unknown error occurred during analysis.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 text-gray-100 font-sans p-4 sm:p-6 md:p-8">
            <header className="text-center mb-8">
                <Leaf className="w-10 h-10 mx-auto text-red-500 mb-2" />
                <h1 className="text-3xl font-bold text-yellow-400">THẬN VÀ SỨC KHOẺ</h1>
                <p className="text-sm text-gray-400 mt-1 max-w-2xl mx-auto">Chọn các triệu chứng ứng với sức khoẻ của bạn (Lưu ý: các triệu chứng hiện tại đang mắc phải, các triệu chứng lâu lâu mới bị một lần thì không tính vào).</p>
            </header>

            <div className="max-w-xl mx-auto mb-10 bg-gray-800 p-4 sm:p-6 rounded-xl shadow-xl">
                <h2 className="text-xl font-semibold mb-4 text-red-400 border-b border-red-800 pb-2">1. Checklist Triệu Chứng</h2>
                
                {SYMPTOM_GROUPS.map(group => {
                    const Icon = group.icon;
                    return (
                        <div key={group.id} className="mb-6 p-3 border border-gray-700 rounded-lg bg-gray-700/50">
                            <div className={`flex items-center mb-3 ${group.color}`}>
                                <Icon className="w-4 h-4 mr-2" />
                                <h3 className="font-bold text-base">{group.title}</h3>
                            </div>
                            <div className="space-y-2">
                                {group.symptoms.map((symptom, index) => (
                                    <label key={index} className="flex items-start text-sm cursor-pointer hover:text-yellow-400 transition-colors">
                                        <input
                                            type="checkbox"
                                            checked={checkedSymptoms[`${group.id}|${symptom}`] || false}
                                            onChange={() => handleCheckboxChange(group.id, symptom)}
                                            className="mt-1 w-4 h-4 text-red-500 bg-gray-900 border-gray-600 rounded focus:ring-red-500 focus:ring-2"
                                        />
                                        <span className="ml-2 text-gray-300">{symptom}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    );
                })}

                <div className="mt-6 pt-4 border-t border-red-800">
                    <h3 className="font-bold text-red-400 mb-2">Các triệu chứng khác (Tự nhập)</h3>
                    <textarea
                        value={freeTextSymptoms}
                        onChange={(e) => setFreeTextSymptoms(e.target.value)}
                        placeholder="Ví dụ: 'gần sáng phải dậy tiểu 1 lần', 'bụng lạnh thì đi ngoài', 'tóc rụng'..."
                        rows={3}
                        className="w-full p-3 text-sm bg-gray-900 border border-gray-700 rounded-lg text-gray-200 focus:ring-yellow-500 focus:border-yellow-500"
                    />
                    
                    <h3 className="font-bold text-red-400 mb-2 mt-4 flex items-center">
                        <Camera className="w-4 h-4 mr-2" /> Thêm ảnh lưỡi (Biện chứng)
                    </h3>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-yellow-50 file:text-red-700 hover:file:bg-yellow-100 cursor-pointer"
                    />

                    {tongueImage && (
                        <div className="mt-3 p-3 bg-gray-700/70 rounded-lg">
                            <p className="text-xs text-yellow-400 mb-2">Ảnh lưỡi đã tải lên:</p>
                            <img 
                                src={tongueImage} 
                                alt="Ảnh lưỡi" 
                                className="w-full max-h-48 object-contain rounded border border-gray-600" 
                            />
                        </div>
                    )}
                </div>

                <button
                    onClick={handleAnalyze}
                    disabled={loading}
                    className="w-full mt-6 py-3 px-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {loading ? (
                        <>
                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                            Đang phân tích...
                        </>
                    ) : (
                        'XEM KẾT QUẢ PHÂN TÍCH'
                    )}
                </button>

                {error && (
                    <div className="mt-4 p-3 bg-red-900/50 border border-red-700 text-red-300 rounded-lg text-sm">
                        ⚠️ {error}
                    </div>
                )}
            </div>
            
            {analysisResult && (
                <div className="max-w-xl mx-auto mt-10 p-4 sm:p-6 bg-gray-950 rounded-2xl shadow-2xl border-2 border-yellow-700">
                    <h2 className="text-2xl font-bold mb-6 text-yellow-400 text-center border-b-2 border-red-600 pb-3">2. KẾT QUẢ ĐÔNG Y BIỆN CHỨNG</h2>
                    
                    <ResultSection
                        title="Triệu chứng"
                        content={analysisResult.trieuChung.join('\n')}
                        Icon={ScrollText}
                        colorClass="text-red-400"
                    />
                    
                    <ResultSection
                        title="Kết luận"
                        content={analysisResult.ketLuan}
                        Icon={Leaf}
                        colorClass="text-yellow-400"
                    />

                    <ResultSection
                        title="Hướng hỗ trợ"
                        content={analysisResult.huongHoTro}
                        Icon={Heart}
                        colorClass="text-pink-400"
                    />
                    
                    <ResultSection
                        title="Gợi ý sản phẩm"
                        content={analysisResult.goiYSanPham}
                        Icon={Package}
                        colorClass="text-orange-300"
                    />

                    <ResultSection
                        title="Cách dùng"
                        content={analysisResult.cachDung}
                        Icon={Shield}
                        colorClass="text-blue-400"
                    />

                    <ResultSection
                        title="Ăn uống – Sinh hoạt"
                        content={analysisResult.anUongSinhHoat}
                        Icon={Droplet}
                        colorClass="text-green-400"
                    />
                </div>
            )}

            {analysisResult && (
                <div className="max-w-xl mx-auto mt-8 p-4 bg-red-800/20 border border-red-700 rounded-xl text-center shadow-inner">
                    <p className="text-lg font-bold text-red-400 mb-3">
                        🛍️ ĐẶT MUA SẢN PHẨM PHÙ HỢP
                    </p>
                    <p className="text-sm text-gray-300 mb-4">
                        Xem ngay trang trưng bày của <strong>Thận & Sức Khoẻ</strong> trên TikTok và chọn sản phẩm phù hợp với bạn:
                    </p>
                    <a 
                        href="https://vt.tiktok.com/ZSYxK9S2u/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block py-2 px-6 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition duration-200 shadow-md transform hover:scale-105"
                    >
                        Truy Cập Trang Mua Hàng TikTok
                    </a>
                </div>
            )}

            <footer className="text-center text-xs text-gray-600 mt-10 max-w-xl mx-auto">
                <p>Nếu không thấy mua được qua tiktok thì mọi người có thể đặt hàng qua Zalo: 
                    <a href="https://zalo.me/0392938357" target="_blank" rel="noopener noreferrer" className="text-yellow-400 ml-1 hover:underline">
                        0392938357
                    </a>
                </p>
            </footer>
        </div>
    );
};

export default App;
