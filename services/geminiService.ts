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
            const errorMessage = e.message.toLowerCase();

            // Check for 503: Model overloaded. This is a temporary issue.
            if (errorMessage.includes('"code":503') || errorMessage.includes('unavailable') || errorMessage.includes('model is overloaded')) {
                // This specific string will be caught by the UI to trigger retries.
                throw new Error('MODEL_OVERLOADED');
            }
            
            // Check for 429: Rate limiting / quota exhausted. This is a user account issue.
            if (errorMessage.includes('"code":429') || errorMessage.includes('resource_exhausted')) {
                throw new Error('Lượt sử dụng API miễn phí đã hết. Vui lòng kiểm tra lại gói dịch vụ và thông tin thanh toán tài khoản Google AI của bạn để tiếp tục sử dụng.');
            }

            // Check for 403: Permission denied. This is an API key issue.
            if (errorMessage.includes('"code":403') || errorMessage.includes('permission_denied')) {
                throw new Error('Lỗi xác thực (403): Không có quyền truy cập dịch vụ AI. Vui lòng kiểm tra lại API key đã được cấu hình đúng và có đủ quyền hạn để sử dụng mô hình này.');
            }

            // For any other specific API error, we now return a user-friendly message
            // instead of the raw JSON error. This is the key fix for the user's issue.
            throw new Error('Đã xảy ra lỗi trong quá trình phân tích từ AI. Vui lòng thử lại.');
        }
        // For non-Error exceptions or unknown errors
        throw new Error('Đã xảy ra lỗi không xác định. Vui lòng thử lại.');
    }
}