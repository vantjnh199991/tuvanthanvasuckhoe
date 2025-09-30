import { GoogleGenAI, Part, GenerateContentResponse, Modality } from '@google/genai';
import { RESPONSE_SCHEMA, SYSTEM_PROMPT } from '../constants';
import { FullAnalysisResponse } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

function createImagePart(base64Image: string): Part {
    const parts = base64Image.split(',');
    if (parts.length !== 2) {
        throw new Error("Định dạng ảnh Base64 không hợp lệ.");
    }
    const mimeTypePart = parts[0];
    const base64Data = parts[1];
    
    const mimeTypeMatch = mimeTypePart.match(/:(.*?);/);
    const mimeType = mimeTypeMatch ? mimeTypeMatch[1] : 'image/jpeg'; 

    return {
        inlineData: {
            mimeType: mimeType,
            data: base64Data
        }
    };
}

export async function analyzeSymptomsWithGemini(
    selectedSymptoms: string[],
    freeTextSymptoms: string,
    tongueImage: string | null
): Promise<{ analysis: FullAnalysisResponse, editedImage: string | null }> {
    
    const allSymptoms = [...selectedSymptoms, freeTextSymptoms.trim()].filter(s => s);
    const symptomListText = allSymptoms.join('; ');
    
    let userQuery = `Triệu chứng của tôi là: ${symptomListText}`;
    
    try {
        if (tongueImage) {
            userQuery += "\n\n(Lưu ý: Có kèm ảnh lưỡi đính kèm để phân tích thêm.)";
            const originalImagePart = createImagePart(tongueImage);

            // Promise for text analysis (JSON)
            const analysisPromise = ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: [{ parts: [{ text: userQuery }, originalImagePart] }],
                config: {
                    systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
                    responseMimeType: "application/json",
                    responseSchema: RESPONSE_SCHEMA
                }
            });

            // Promise for image editing
            const editImagePromise = ai.models.generateContent({
                model: 'gemini-2.5-flash-image-preview',
                contents: {
                    parts: [
                        originalImagePart,
                        { text: 'Phân tích ảnh lưỡi này. Khoanh tròn các vùng quan trọng và ghi chú bằng tiếng Việt, mỗi vùng một màu khác nhau để dễ phân biệt. Cụ thể: khoanh vùng đầu lưỡi (Tâm Phế) bằng màu đỏ, vùng giữa lưỡi (Tỳ Vị) bằng màu vàng, vùng cuống lưỡi (Thận) bằng màu xanh dương, và hai bên rìa lưỡi (Can Đởm) bằng màu xanh lá cây. Trả về hình ảnh đã được chú thích.' },
                    ],
                },
                config: {
                    responseModalities: [Modality.IMAGE, Modality.TEXT],
                },
            });

            const [analysisResponse, editResponse] = await Promise.all([analysisPromise, editImagePromise]);

            const jsonText = analysisResponse.text;
            if (!jsonText) {
                throw new Error('Không thể nhận được kết quả phân tích từ AI. Phản hồi trống.');
            }
            const analysis = JSON.parse(jsonText) as FullAnalysisResponse;

            let editedImage: string | null = null;
            if (editResponse?.candidates?.[0]?.content?.parts) {
                for (const part of editResponse.candidates[0].content.parts) {
                    if (part.inlineData) {
                        editedImage = `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
                        break; 
                    }
                }
            }
            
            return { analysis, editedImage };

        } else {
            // No image, perform text-only analysis
            const response: GenerateContentResponse = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: [{ parts: [{ text: userQuery }] }],
                config: {
                    systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
                    responseMimeType: "application/json",
                    responseSchema: RESPONSE_SCHEMA
                }
            });

            const jsonText = response.text;
            if (jsonText) {
                const analysis = JSON.parse(jsonText) as FullAnalysisResponse;
                return { analysis, editedImage: null };
            } else {
                throw new Error('Không thể nhận được kết quả phân tích từ AI. Phản hồi trống.');
            }
        }

    } catch (e) {
        console.error("AI Analysis Error:", e);
        if (e instanceof Error) {
            if (e.message.includes('"code":429') || e.message.includes('RESOURCE_EXHAUSTED')) {
                throw new Error('Lượt sử dụng API miễn phí đã hết. Vui lòng kiểm tra lại gói dịch vụ và thông tin thanh toán tài khoản Google AI của bạn để tiếp tục sử dụng.');
            }
            throw new Error(`Lỗi phân tích từ AI: ${e.message}. Vui lòng thử lại.`);
        }
        throw new Error('Đã xảy ra lỗi không xác định trong quá trình phân tích.');
    }
}