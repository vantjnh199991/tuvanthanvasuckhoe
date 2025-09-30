
import { GoogleGenAI, Part, GenerateContentResponse } from '@google/genai';
import { RESPONSE_SCHEMA, SYSTEM_PROMPT } from '../constants';
import { FullAnalysisResponse } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

export async function analyzeSymptomsWithGemini(
    selectedSymptoms: string[],
    freeTextSymptoms: string,
    tongueImage: string | null
): Promise<FullAnalysisResponse> {
    
    const allSymptoms = [...selectedSymptoms, freeTextSymptoms.trim()].filter(s => s);
    const symptomListText = allSymptoms.join('; ');
    
    let userQuery = `Triệu chứng của tôi là: ${symptomListText}`;
    if (tongueImage) {
        userQuery += "\n\n(Lưu ý: Có kèm ảnh lưỡi đính kèm để phân tích thêm.)";
    }

    const contentParts: Part[] = [{ text: userQuery }];

    if (tongueImage) {
        try {
            const parts = tongueImage.split(',');
            if (parts.length !== 2) {
                throw new Error("Định dạng ảnh Base64 không hợp lệ.");
            }
            const mimeTypePart = parts[0];
            const base64Data = parts[1];
            
            const mimeTypeMatch = mimeTypePart.match(/:(.*?);/);
            const mimeType = mimeTypeMatch ? mimeTypeMatch[1] : 'image/jpeg'; 

            contentParts.push({
                inlineData: {
                    mimeType: mimeType,
                    data: base64Data
                }
            });
        } catch (e) {
            console.error("Error processing image:", e);
            throw new Error('Lỗi xử lý ảnh. Vui lòng thử lại với ảnh khác.');
        }
    }
    
    try {
        const response: GenerateContentResponse = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: [{ parts: contentParts }],
            config: {
                systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
                responseMimeType: "application/json",
                responseSchema: RESPONSE_SCHEMA
            }
        });

        const jsonText = response.text;
        if (jsonText) {
            return JSON.parse(jsonText) as FullAnalysisResponse;
        } else {
            throw new Error('Không thể nhận được kết quả phân tích từ AI. Phản hồi trống.');
        }

    } catch (e) {
        console.error("AI Analysis Error:", e);
        if (e instanceof Error) {
            throw new Error(`Lỗi kết nối hoặc phân tích: ${e.message}. Vui lòng thử lại.`);
        }
        throw new Error('Đã xảy ra lỗi không xác định trong quá trình phân tích.');
    }
}
