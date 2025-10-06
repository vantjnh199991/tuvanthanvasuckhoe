import { GoogleGenAI, Part, GenerateContentResponse } from '@google/genai';
import { SYSTEM_PROMPT } from '../constants';

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

export async function analyzeSymptomsStream(
    selectedSymptoms: string[],
    freeTextSymptoms: string,
    tongueImage: string | null
): Promise<AsyncGenerator<GenerateContentResponse>> {
    
    const allSymptoms = [...selectedSymptoms, freeTextSymptoms.trim()].filter(s => s);
    const symptomListText = allSymptoms.join('; ');
    
    const userPrompt = `Triệu chứng của tôi là: ${symptomListText}`;
    
    const parts: Part[] = [{ text: userPrompt }];
    
    if (tongueImage) {
        parts.push(createImagePart(tongueImage));
        parts[0].text += "\n\n(Lưu ý: Có kèm ảnh lưỡi đính kèm để phân tích thêm.)";
    }
    
    try {
        const responseStream = await ai.models.generateContentStream({
            model: 'gemini-2.5-flash',
            contents: { parts: parts },
            config: {
                systemInstruction: SYSTEM_PROMPT,
            }
        });

        return responseStream;

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