

import React, { useState, useMemo, useCallback } from 'react';
import { SYMPTOM_GROUPS } from './constants';
import { AnalysisResult } from './types';
import { analyzeSymptomsStream } from './services/geminiService';
import ResultSection from './components/ResultSection';
import { Leaf, ScrollText, Heart, Shield, Droplet, Package, Camera, Loader2, Search, Zap } from './components/Icons';

const generateCacheKey = (symptoms: string[], freeText: string, image: string | null): string => {
    const imagePart = image ? image.substring(0, 100) : 'no-image';
    return `${symptoms.sort().join('|')}|${freeText.trim()}|${imagePart}`;
};

const cleanJsonString = (rawString: string): string => {
    let clean = rawString.trim();
    if (clean.startsWith('```json')) {
        clean = clean.substring(7);
    }
    if (clean.endsWith('```')) {
        clean = clean.substring(0, clean.length - 3);
    }
    return clean.trim();
}


const App: React.FC = () => {
    const [checkedSymptoms, setCheckedSymptoms] = useState<Record<string, boolean>>({});
    const [freeTextSymptoms, setFreeTextSymptoms] = useState('');
    const [tongueImage, setTongueImage] = useState<string | null>(null);
    const [analysisResult, setAnalysisResult] = useState<Partial<AnalysisResult> | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [cache, setCache] = useState<Record<string, AnalysisResult>>({});

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
            const [, symptom] = key.split('|');
            return symptom;
        });
    }, [checkedSymptoms]);

    const selectedSymptomsContent = useMemo(() => {
        if (analysisResult?.trieuChung && Array.isArray(analysisResult.trieuChung) && analysisResult.trieuChung.length > 0) {
            return analysisResult.trieuChung.map(s => `- ${s}`).join('\n');
        }
        return undefined;
    }, [analysisResult?.trieuChung]);

    const freeTextSymptomsContent = useMemo(() => {
        if (analysisResult?.bienChungTrieuChung && Array.isArray(analysisResult.bienChungTrieuChung) && analysisResult.bienChungTrieuChung.length > 0) {
            return analysisResult.bienChungTrieuChung.map(s => `- ${s}`).join('\n');
        }
        return undefined;
    }, [analysisResult?.bienChungTrieuChung]);


    const handleAnalyze = async () => {
        if (selectedSymptomsList.length === 0 && freeTextSymptoms.trim() === '' && !tongueImage) {
            setError('Vui lòng chọn, nhập ít nhất một triệu chứng, hoặc tải ảnh lưỡi.');
            return;
        }

        setLoading(true);
        setError('');
        setAnalysisResult(null);

        // Add a 10-second delay before starting the analysis
        await new Promise(resolve => setTimeout(resolve, 10000));

        const localSymptoms = [...selectedSymptomsList];
        
        const cacheKey = generateCacheKey(selectedSymptomsList, freeTextSymptoms, tongueImage);

        if (cache[cacheKey]) {
            setAnalysisResult({
                trieuChung: localSymptoms,
                ...cache[cacheKey]
            });
            setLoading(false);
            return;
        }

        setAnalysisResult({ trieuChung: localSymptoms });
        
        const MAX_RETRIES = 5;
        let lastError: Error | null = null;

        for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
            let finalResultForCache: Partial<AnalysisResult> = {};
             if (attempt > 1) {
                setAnalysisResult({ trieuChung: localSymptoms });
            }

            try {
                const stream = await analyzeSymptomsStream(selectedSymptomsList, freeTextSymptoms, tongueImage);
                
                let buffer = '';

                for await (const chunk of stream) {
                    buffer += chunk.text;
                    let lastNewline = buffer.lastIndexOf('\n');
                    
                    if (lastNewline !== -1) {
                        const linesToProcess = buffer.substring(0, lastNewline);
                        buffer = buffer.substring(lastNewline + 1);

                        linesToProcess.split('\n').forEach(line => {
                            const cleanLine = cleanJsonString(line);
                            if (cleanLine) {
                                try {
                                    const parsed = JSON.parse(cleanLine);
                                    finalResultForCache = { ...finalResultForCache, ...parsed };
                                    setAnalysisResult(prev => ({ ...prev, ...parsed }));
                                } catch (e) {
                                    console.warn("Failed to parse JSON line:", `"${line}"`, e);
                                }
                            }
                        });
                    }
                }
                
                const finalCleanLine = cleanJsonString(buffer);
                if (finalCleanLine) {
                    try {
                        const parsed = JSON.parse(finalCleanLine);
                        finalResultForCache = { ...finalResultForCache, ...parsed };
                        setAnalysisResult(prev => ({ ...prev, ...parsed }));
                    } catch (e) {
                        console.warn("Failed to parse final buffer content:", `"${buffer}"`, e);
                    }
                }

                const requiredKeys = ['ketLuan', 'huongHoTro', 'goiYSanPham', 'cachDung', 'anUongSinhHoat'];
                if (freeTextSymptoms.trim()) {
                    requiredKeys.push('bienChungTrieuChung');
                }
                if (tongueImage) {
                    requiredKeys.push('phanTichLuoi');
                }
                 if (finalResultForCache.goiYSanPham) {
                    const productCount = (finalResultForCache.goiYSanPham.match(/\*\*(.*?)\*\*/g) || []).length;
                    if (productCount >= 2) {
                        requiredKeys.push('lyDoKetHop');
                    }
                }

                const missingKeys = requiredKeys.filter(key => !(key in finalResultForCache));
                if (missingKeys.length > 0) {
                    throw new Error(`INCOMPLETE_ANALYSIS: Missing keys: ${missingKeys.join(', ')}`);
                }

                setCache(prevCache => ({
                    ...prevCache,
                    [cacheKey]: finalResultForCache as AnalysisResult
                }));
                
                setError(''); 
                lastError = null;
                break; 

            } catch (e) {
                 if (e instanceof Error) {
                    lastError = e;
                    const isOverloadedError = e.message === 'MODEL_OVERLOADED';
                    const isIncompleteAnalysisError = e.message.startsWith('INCOMPLETE_ANALYSIS');

                    if ((isOverloadedError || isIncompleteAnalysisError) && attempt < MAX_RETRIES) {
                        const retryMessage = isOverloadedError 
                            ? `Máy chủ AI đang quá tải. Đang thử lại...`
                            : `Kết quả phân tích chưa hoàn chỉnh. Đang thử lại...`;
                        
                        console.warn(`Attempt ${attempt} failed: ${e.message}. Retrying...`);
                        setError(`${retryMessage} (${attempt}/${MAX_RETRIES})`);
                        await new Promise(resolve => setTimeout(resolve, 1000 * attempt));
                    } else {
                        break; 
                    }
                } else {
                    lastError = new Error('An unknown error occurred during analysis.');
                    break;
                }
            }
        }
        
        if (lastError) {
             if (lastError.message.startsWith('INCOMPLETE_ANALYSIS')) {
                 setError('Không thể hoàn tất phân tích sau nhiều lần thử. Vui lòng thử lại sau hoặc điều chỉnh lại các triệu chứng.');
             } else if (lastError.message === 'MODEL_OVERLOADED') {
                 setError('Máy chủ AI hiện đang quá tải. Sau 5 lần thử vẫn không thành công, vui lòng thử lại sau ít phút.');
             } else {
                setError(lastError.message);
             }
             setAnalysisResult(null);
        }

        setLoading(false);
    };

    return (
        <div className="min-h-screen bg-gray-900 text-gray-100 font-sans p-4 sm:p-6 md:p-8">
            <header className="text-center mb-8">
                <Leaf className="w-10 h-10 mx-auto text-red-500 mb-2" />
                <h1 className="text-4xl font-bold text-yellow-400">THẬN VÀ SỨC KHOẺ</h1>
                <p className="text-lg text-gray-400 mt-1 max-w-2xl mx-auto">Chọn các triệu chứng ứng với sức khoẻ của bạn (Lưu ý: các triệu chứng hiện tại đang mắc phải, các triệu chứng lâu lâu mới bị một lần thì không tính vào).</p>
            </header>

            <div className="max-w-xl mx-auto mb-10 bg-gray-800 p-4 sm:p-6 rounded-xl shadow-xl">
                <h2 className="text-2xl font-semibold mb-4 text-red-400 border-b border-red-800 pb-2">1. Checklist Triệu Chứng</h2>
                
                {SYMPTOM_GROUPS.map(group => {
                    const Icon = group.icon;
                    return (
                        <div key={group.id} className="mb-6 p-3 border border-gray-700 rounded-lg bg-gray-700/50">
                            <div className={`flex items-center mb-3 ${group.color}`}>
                                <Icon className="w-4 h-4 mr-2" />
                                <h3 className="font-bold text-lg">{group.title}</h3>
                            </div>
                            <div className="space-y-2">
                                {group.symptoms.map((fullSymptom, index) => {
                                    const symptomText = fullSymptom.split('→')[0].trim();
                                    return (
                                        <label key={index} className="flex items-start text-lg cursor-pointer hover:text-yellow-400 transition-colors">
                                            <input
                                                type="checkbox"
                                                checked={checkedSymptoms[`${group.id}|${fullSymptom}`] || false}
                                                onChange={() => handleCheckboxChange(group.id, fullSymptom)}
                                                className="mt-1 w-4 h-4 text-red-500 bg-gray-900 border-gray-600 rounded focus:ring-red-500 focus:ring-2"
                                            />
                                            <span className="ml-2 text-gray-300">{symptomText}</span>
                                        </label>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}

                <div className="mt-6 pt-4 border-t border-red-800">
                    <h3 className="font-bold text-red-400 mb-2">Các triệu chứng khác (Tự nhập)</h3>
                    <p className="text-base text-gray-400 mb-2">Vui lòng nhập bằng tiếng Việt có dấu để kết quả phân tích được chính xác nhất.</p>
                    <textarea
                        value={freeTextSymptoms}
                        onChange={(e) => setFreeTextSymptoms(e.target.value)}
                        placeholder="Ví dụ: 'đau lưng', 'mất ngủ', 'tóc rụng'..."
                        rows={3}
                        className="w-full p-3 text-lg bg-gray-900 border border-gray-700 rounded-lg text-gray-200 focus:ring-yellow-500 focus:border-yellow-500"
                    />
                    
                    <h3 className="font-bold text-red-400 mb-2 mt-4 flex items-center">
                        <Camera className="w-4 h-4 mr-2" /> Thêm ảnh lưỡi (Biện chứng)
                    </h3>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="w-full text-lg text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-yellow-50 file:text-red-700 hover:file:bg-yellow-100 cursor-pointer"
                    />

                    {tongueImage && (
                        <div className="mt-3 p-3 bg-gray-700/70 rounded-lg">
                            <p className="text-sm text-yellow-400 mb-2">Ảnh lưỡi đã tải lên:</p>
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
                    <div className="mt-4 p-3 bg-red-900/50 border border-red-700 text-red-300 rounded-lg text-lg">
                        ⚠️ {error}
                    </div>
                )}
            </div>
            
            {analysisResult && (analysisResult.ketLuan || loading) && (
                <div className="max-w-xl mx-auto mt-10 p-4 sm:p-6 bg-gray-950 rounded-2xl shadow-2xl border-2 border-yellow-700">
                    <h2 className="text-3xl font-bold mb-6 text-yellow-400 text-center border-b-2 border-red-600 pb-3">2. KẾT QUẢ ĐÔNG Y BIỆN CHỨNG</h2>
                    
                    {selectedSymptomsContent && <ResultSection title="Triệu chứng đã chọn" content={selectedSymptomsContent} Icon={ScrollText} colorClass="text-red-400" />}
                    {freeTextSymptomsContent && <ResultSection title="Triệu chứng nhập thêm (Biện chứng)" content={freeTextSymptomsContent} Icon={Search} colorClass="text-teal-400" />}

                    <ResultSection title="Kết luận" content={analysisResult.ketLuan} Icon={Leaf} colorClass="text-yellow-400" />
                    {tongueImage && <ResultSection title="Phân tích lưỡi" content={analysisResult.phanTichLuoi} Icon={Search} colorClass="text-cyan-400" />}
                    <ResultSection title="Hướng hỗ trợ" content={analysisResult.huongHoTro} Icon={Heart} colorClass="text-pink-400" />
                    <ResultSection title="Gợi ý sản phẩm" content={analysisResult.goiYSanPham} Icon={Package} colorClass="text-orange-300" />
                    {analysisResult.lyDoKetHop && (
                        <ResultSection title="Tại sao phải kết hợp?" content={analysisResult.lyDoKetHop} Icon={Zap} colorClass="text-purple-400" />
                    )}
                    <ResultSection title="Cách dùng" content={analysisResult.cachDung} Icon={Shield} colorClass="text-blue-400" />
                    <ResultSection title="Ăn uống – Sinh hoạt" content={analysisResult.anUongSinhHoat} Icon={Droplet} colorClass="text-green-400" />
                </div>
            )}

            {analysisResult && analysisResult.goiYSanPham && (
                <div className="max-w-xl mx-auto mt-8 p-4 bg-red-800/20 border border-red-700 rounded-xl text-center shadow-inner">
                    <p className="text-xl font-bold text-red-400 mb-3">
                        🛍️ ĐẶT MUA SẢN PHẨM PHÙ HỢP
                    </p>
                    <p className="text-lg text-gray-300 mb-4">
                        Xem ngay trang trưng bày của <strong>Thận & Sức Khoẻ</strong> trên TikTok và chọn sản phẩm phù hợp với bạn:
                    </p>
                    <a 
                        href="https://vt.tiktok.com/ZSHW4675b7t7d-MfD5z/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block py-2 px-6 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition duration-200 shadow-md transform hover:scale-105"
                    >
                        Truy Cập Trang Mua Hàng TikTok
                    </a>
                </div>
            )}

            <footer className="text-center text-sm text-gray-600 mt-10 max-w-xl mx-auto">
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