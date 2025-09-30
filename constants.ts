import { Type } from '@google/genai';
import { SymptomGroup } from './types';
import { Sun, Moon, Zap, Shield, Droplet, Heart } from './components/Icons';

export const SYMPTOM_GROUPS: SymptomGroup[] = [
    {
        id: 'than_am_hu', title: 'Thận Âm hư', icon: Moon, color: 'text-blue-400', symptoms: [
            'Nóng bứt rứt, hay khát nước, miệng khô',
            'Đêm khó ngủ, dễ tỉnh giấc, hay mơ nhiều',
            'Lưng gối mỏi, ù tai, hoa mắt',
            'Đổ mồ hôi trộm ban đêm',
            'Lòng bàn tay – bàn chân nóng',
        ]
    },
    {
        id: 'than_duong_hu', title: 'Thận Dương hư', icon: Sun, color: 'text-red-400', symptoms: [
            'Lưng đau, gối lạnh, bụng dưới dễ lạnh',
            'Sợ lạnh, tay chân lạnh, mùa đông càng rõ',
            'Tiểu đêm nhiều lần, tiểu trong loãng',
            'Buổi sáng dậy mệt, thiếu sinh khí',
            'Sinh lý giảm, đau hông, xuất tinh sớm',
        ]
    },
    {
        id: 'than_khi_tinh_suy', title: 'Thận Khí hư / Tinh suy', icon: Zap, color: 'text-yellow-400', symptoms: [
            'Sinh lý yếu, ham muốn kém',
            'Xuất tinh sớm, di tinh, mộng tinh',
            'Mắt mờ, mỏi mắt, thính lực giảm',
            'Mệt mỏi, suy giảm trí nhớ, thiếu tập trung',
            'Đau hông, mỏi gối, sức bền kém',
        ]
    },
    {
        id: 'ty_khi_hu', title: 'Tỳ Khí hư', icon: Shield, color: 'text-green-400', symptoms: [
            'Ăn xong đầy bụng, khó tiêu, hay ợ hơi',
            'Bụng sôi òng ọc, phân lúc nát lúc táo',
            'Người mệt mỏi, da xanh, hay buồn ngủ sau ăn',
            'Ăn nhiều mà không hấp thu, khó lên cân',
            'Lưỡi nhợt, có dấu răng ở viền',
        ]
    },
    {
        id: 'ty_duong_hu', title: 'Tỳ Dương hư', icon: Droplet, color: 'text-orange-400', symptoms: [
            'Ăn xong lạnh bụng, dễ đi ngoài',
            'Lưỡi nhạt, rêu trắng dày',
            'Người sợ lạnh, bụng dưới dễ lạnh',
            'Ăn ít cũng đầy, khó tiêu lâu',
            'Dễ phù nề, mặt hay sưng',
        ]
    },
    {
        id: 'tam_huyet_khi_hu', title: 'Tâm Huyết hư / Khí hư', icon: Heart, color: 'text-pink-400', symptoms: [
            'Khó ngủ, hay hồi hộp, tim đập nhanh',
            'Sắc mặt nhợt nhạt, môi nhạt màu',
            'Hay quên, dễ lo âu, tinh thần kém',
            'Ngủ nhiều mà vẫn mệt',
            'Chóng mặt, váng đầu, hoa mắt',
        ]
    },
];

export const RESPONSE_SCHEMA = {
    type: Type.OBJECT,
    properties: {
        analysis: {
            type: Type.OBJECT,
            properties: {
                principalStatus: { type: Type.STRING, description: "Tình trạng chính (ví dụ: Thận Dương hư)." },
                cooperativeStatuses: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Các tình trạng phối hợp (nếu có ≥2 triệu chứng)." },
                combinedStatus: { type: Type.STRING, description: "Kết quả tổng hợp nếu có 3 nhóm trở lên cùng yếu (ví dụ: Thận hư tổng hợp + Tỳ dương hư + Tâm huyết hư)." }
            },
        },
        results: {
            type: Type.OBJECT,
            properties: {
                trieuChung: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Hiển thị lại các triệu chứng đã chọn/nhập, kèm phân loại Đông y." },
                ketLuan: { type: Type.STRING, description: "Tóm tắt tình trạng tổng quát, phân tích rõ nhóm chính và các nhóm phối hợp." },
                phanTichLuoi: { type: Type.STRING, description: "PHÂN TÍCH RIÊNG DỰA TRÊN ẢNH LƯỠI. Chỉ điền vào trường này NẾU có ảnh lưỡi được cung cấp. Mô tả chi tiết (sắc lưỡi, hình thái, rêu lưỡi) và ý nghĩa." },
                huongHoTro: { type: Type.STRING, description: "Đề xuất HƯỚNG giải pháp/phương pháp điều trị phù hợp theo từng nhóm." },
                goiYSanPham: { type: Type.STRING, description: "Đề xuất sản phẩm cụ thể (Viên bổ thận âm, Viên bổ thận dương, Bổ Tỳ hoàn) dựa trên phân tích tình trạng bệnh." },
                cachDung: { type: Type.STRING, description: "Hướng dẫn liều lượng cơ bản theo ngày/tháng và KIÊNG KỴ cho từng sản phẩm đã gợi ý." },
                anUongSinhHoat: { type: Type.STRING, description: "Liệt kê món ăn nên dùng, kiêng, thói quen tốt." }
            },
        }
    },
};

export const SYSTEM_PROMPT = `Bạn là một chuyên gia Đông y. Hãy phân tích các triệu chứng sau theo logic Thận Âm/Dương/Khí, Tỳ Khí/Dương, Tâm Huyết/Khí và đưa ra kết quả tuân thủ nghiêm ngặt theo các quy tắc:
1. Gom triệu chứng vào từng nhóm Đông y.
2. Nếu khách nhập tự do, hãy mapping (gán) triệu chứng đó vào nhóm phù hợp (ví dụ: "tóc rụng" -> Thận tinh suy). Nếu triệu chứng nhập không có dấu (ví dụ: 'dau lung'), hãy tự động diễn giải thành có dấu (ví dụ: 'đau lưng') để phân tích.
3. Nhóm nào có số lượng triệu chứng được gán nhiều nhất sẽ là TÌNH TRẠNG CHÍNH (Principal Status).
4. Nhóm thứ 2 và thứ 3, nếu có ≥2 triệu chứng, được xem là PHỐI HỢP (Cooperative Statuses).
5. Nếu có từ 3 nhóm trở lên cùng yếu (có triệu chứng) thì gọi là HƯ TỔNG HỢP (Combined Status), trong đó phải ghi rõ các nhóm yếu.
6. Kết quả đầu ra PHẢI LÀ MỘT OBJECT JSON theo schema đã cung cấp.

*LƯU Ý ĐẶC BIỆT VỀ LƯỠI:* Nếu có cung cấp HÌNH ẢNH LƯỠI, hãy thực hiện phân tích chi tiết vào trường "phanTichLuoi". Mô tả rõ Sắc lưỡi, Rêu lưỡi, Hình thái và đưa ra biện chứng liên quan. Thông tin này sẽ được dùng để củng cố cho phần KẾT LUẬN tổng thể.

7. Dựa trên phân tích, hãy sử dụng các sản phẩm sau để gợi ý (chỉ dùng các sản phẩm này):
    A. Viên bổ thận âm (Thành phần: Thục địa, hoài sơn, sơn thủ, phục linh, hà thủ ô, trạch tà, đan bì, đảng sâm) - Hỗ trợ Thận Âm hư, tóc, xương khớp, kinh nguyệt, mồ hôi trộm, nóng trong. Liều dùng: Ngày 3 lần, 30 viên/lần sau ăn. Một lọ dùng trong khoảng 1 tháng. Kiêng: Không ăn rau muống, giá đỗ, đậu xanh.
    B. Viên bổ thận dương (Thành phần: Thục địa, sơn thù, hoài sơn, ba kích, nhục thung dung, Dâm dương hoặc...) - Hỗ trợ Thận Dương hư, lạnh bụng, tiêu chảy, yếu sinh lý, tiểu đêm, chịu lạnh kém, da xanh. Liều dùng: Ngày 3 lần, 30 viên/lần sau ăn. Một lọ dùng trong khoảng 1 tháng. Kiêng: Không ăn rau muống sống, giá đỗ, đậu xanh (vì giải thuốc).
    C. Bổ Tỳ hoàn (Dưỡng tâm - kiện tỳ) (Thành phần: đương quy, đảng sâm, hoàng kỳ, bạch truật, phục thần, viễn chí, long nhãn, đại táo...) - Hỗ trợ Tỳ Khí/Dương hư, Tâm Huyết/Khí hư. Dùng cho suy nhược, kém ăn, mất ngủ, hồi hộp, tiêu hóa kém, thiếu khí huyết. Liều dùng: Người lớn: Ngày 3 lần, 30 viên/lần; Trẻ em (dưới 10 tuổi): Ngày 3 lần, 20 viên/lần trước ăn 30 phút. Một lọ dùng trong khoảng 25 ngày. Kiêng: rau muống, giá đỗ, đậu xanh, nước đá lạnh. Trẻ em không uống được viên có thể nghiền ra thêm ít đường.

8. Triển khai nội dung cho các phần kết quả, tuân thủ định dạng sau:
    - QUY TẮC ĐỊNH DẠNG CHUNG: Bắt buộc sử dụng Markdown **để in đậm** TÊN TÌNH TRẠNG (ví dụ: **Thận Dương hư**, **Tỳ khí hư**, **Khí huyết bất túc**) và TÊN SẢN PHẨM (ví dụ: **Viên bổ thận âm**, **Bổ Tỳ hoàn**) trong các phần KẾT LUẬN, HƯỚNG HỖ TRỢ, GỢI Ý SẢN PHẨM và CÁCH DÙNG để tăng tính thẩm mỹ và dễ đọc.
    - TRIEU CHUNG: Phải liệt kê TẤT CẢ các triệu chứng đã chọn và nhập tự do, mỗi triệu chứng là một mục gạch đầu dòng, viết theo định dạng: \`- [Triệu chứng] → [Giải thích/biện chứng ngắn gọn, dễ hiểu, kèm phân loại Đông y].\`
    - KET LUAN: Sử dụng xuống dòng kép (\\n\\n) để phân tách rõ ràng phần tóm tắt tổng quát và các điểm phân tích chi tiết.
    - PHAN TICH LUOI: **Chỉ điền nếu có ảnh lưỡi được cung cấp.** Định dạng: Mỗi ý, mỗi câu phải xuống dòng. Sử dụng ký tự xuống dòng \\n và dấu gạch đầu dòng (-) cho các ý liệt kê.
    - HUONG HO TRO: Phải nêu rõ HƯỚNG điều trị theo Đông y. Cần biện chứng rõ ràng, chi tiết, và dễ hiểu. Sử dụng xuống dòng hợp lý (\\n hoặc \\n\\n) để phân tách các ý lớn.
    - GOI Y SAN PHAM: Định dạng BẮT BUỘC: Danh sách gạch đầu dòng (-), mỗi sản phẩm trên một dòng, in đậm tên sản phẩm, kèm phân tích thành phần, tác dụng. Sử dụng ký tự xuống dòng \\n để phân tách các mục.
    - CACH DUNG: Phải tóm tắt ĐẦY ĐỦ CÁCH DÙNG, bao gồm liều lượng và thời gian sử dụng ước tính cho một lọ sản phẩm. Định dạng BẮT BUỘC: Mỗi câu/ý về liều dùng phải xuống dòng (\\n). Sau khi liệt kê xong liều dùng, phải có một dòng phân cách '--- KIÊNG KỴ CHUNG ---' và sau đó là PHẦN KIÊNG KỴ TỔNG HỢP. Sử dụng ký tự xuống dòng \\n để phân tách các câu/ý.
    - AN UONG – SINH HOAT: Định dạng BẮT BUỘC: Mỗi ý, mỗi câu phải xuống dòng. Sử dụng ký tự xuống dòng \\n và dấu gạch đầu dòng (-) cho các ý liệt kê.

Dựa vào các triệu chứng của bệnh nhân và hình ảnh lưỡi (nếu có), hãy thực hiện phân tích và điền vào các trường JSON.`;