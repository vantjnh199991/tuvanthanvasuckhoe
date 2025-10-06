import { SymptomGroup } from './types';
import { Sun, Moon, Zap, Shield, Droplet, Heart } from './components/Icons';

export const SYMPTOM_GROUPS: SymptomGroup[] = [
    {
        id: 'am_hu', title: 'Âm Hư – Nội Nhiệt, Mất Tân Dịch', icon: Moon, color: 'text-blue-400', symptoms: [
            'Mồ hôi trộm ban đêm → Thân âm hư, dương khí hư thừa, tân dịch thất giữ mà thoát ra ngoài.',
            'Miệng khô, họng khát, thích uống nước mát → Tân dịch bất túc, âm huyết hư, dương hỏa bốc lên làm khô trong họng.',
            'Lòng bàn tay bàn chân nóng → Âm dịch suy giảm, hư hỏa bốc lên tứ chi.',
            'Người cảm giác nóng trong xương nhưng không ra mồ hôi → Cốt chưng triều nhiệt, do âm tinh hư tổn, dương nội động.',
            'Mắt khô, dễ rát, nhìn mờ về chiều → Can âm bất túc, không nuôi được mục hệ.',
            'Da khô, dễ bong tróc, tóc khô gãy rụng → Huyết âm hư, tân dịch giảm, bì mao mất dưỡng.',
            'Ù tai, nghe tiếng ve kêu, ù về đêm → Thận âm hư, thận khai khiếu ra tai, hư hỏa quấy động.',
            'Mất ngủ do nóng trong, khó ngủ lại sau khi tỉnh → Tâm thận bất giao, âm không chế được dương, hư nhiệt nhiễu thần.',
            'Tiểu vàng sậm, ít nước → Thận âm tổn, hỏa vượng, tân dịch hao, thủy không sinh.',
            'Đại tiện táo, phân khô, khó đi → Tân dịch giảm, trường vị táo nhiệt.',
            'Lưng đau âm ỉ, cảm giác rỗng nóng bên trong → Thận âm hư, cốt tủy bất túc, dương hỏa nội động.',
            'Gò má đỏ, mặt nóng, môi khô → Âm huyết hư, hư hỏa thượng viêm.',
            'Lưỡi đỏ, ít rêu, môi đỏ sậm → Âm tân bất túc, nhiệt thịnh nội sinh.',
            'Cảm giác nóng ở ngực, lòng bàn tay hoặc gan bàn chân → Ngũ tâm phiền nhiệt – dấu hiệu điển hình của âm hư nội nhiệt.',
            'Người hay bốc hỏa, tâm phiền, dễ cáu khi trời nóng → Hư hỏa quấy tâm, tâm thận không giao.',
            'Khát nước về đêm, hay tỉnh lúc 1–3h sáng → Âm dịch hao tổn, can hỏa động, huyết không dưỡng thần.',
            'Da sạm, nổi mụn khô vùng cằm và trán → Hư nhiệt bốc, huyết dịch khô, biểu hiện ra bì phu.',
            'Kinh nguyệt ít, không đều, mãn sớm → Thận âm suy, tinh huyết giảm, xung nhâm hư yếu.',
            'Giấc ngủ nông, dễ tỉnh, sáng dậy khô cổ → Tâm âm hư, thần không an, dương khí không tiềm phục.',
            'Cơ thể gầy, khô, ít mồ hôi → Âm huyết suy giảm, cơ thể mất nguồn sinh dưỡng.',
        ]
    },
    {
        id: 'duong_hu', title: 'Dương Hư – Hàn Nội, Thiếu Khí Lực', icon: Sun, color: 'text-red-400', symptoms: [
            'Tay chân lạnh dù trời nóng → Dương khí suy, vệ dương bất cố, không ôn tứ chi.',
            'Lưng lạnh, mỏi, đầu gối yếu → Thận dương hư, mệnh môn hỏa suy, không ôn thông cân cốt.',
            'Sợ gió, sợ lạnh, dễ rùng mình → Vệ dương hư, hàn dễ xâm nhập.',
            'Bụng lạnh, ăn đồ nguội hay bị đầy hơi → Tỳ dương hư, vận hóa kém, hàn ngưng khí trệ.',
            'Ăn no dễ trướng, lạnh bụng về đêm → Trung dương bất túc, vị khí yếu, không tiêu hóa được thực.',
            'Tiểu đêm nhiều, nước tiểu trong, tiểu khó → Thận khí hư, bàng quang mất nhiếp, thủy dịch không hóa.',
            'Mặt trắng nhợt, môi nhạt, da lạnh → Dương khí hư, huyết mạch trì trệ, sắc diện bất nhuận.',
            'Giọng nhỏ, nói ít, hơi thở ngắn → Phế khí hư, dương khí suy, thanh âm yếu.',
            'Cơ thể dễ mệt, yếu sức khi trời lạnh → Dương khí không đủ để chống hàn tà.',
            'Tay chân phù nhẹ vào sáng sớm → Thủy thấp ứ, dương hư không hóa thủy.',
            'Thường ngáp, buồn ngủ, tỉnh dậy vẫn mệt → Dương khí hư, tinh không sinh thần.',
            'Lưỡi nhạt, rêu trắng ẩm, nước miếng nhiều → Trung hàn, tỳ vị dương suy, thủy ẩm nội đình.',
            'Dễ ớn lạnh vùng lưng, cổ, vai → Thiếu dương không đạt, hàn khí xâm biểu.',
            'Người nặng nề, đi lại chậm, sợ nước lạnh → Dương hư, thủy thấp tích.',
            'Nam: yếu sinh lực, lạnh bụng dưới → Thận dương suy, tinh quan bất cố.',
            'Nữ: bụng dưới lạnh, kinh ít, trễ, khó thụ thai → Thận dương hư, xung nhâm bất ôn.',
            'Thường lạnh gáy khi tắm hoặc trời mưa → Dương khí suy, phong hàn xâm nhập.',
            'Thích đồ ấm, ghét nước lạnh → Dương hư hàn thịnh, ưa ôn, sợ hàn.',
            'Khí lực yếu, ngồi lâu dễ tê mỏi → Dương khí không đạt tứ chi, khí huyết vận hành yếu.',
            'Da nhăn, nhợt, không sáng màu → Khí huyết suy, dương khí không dưỡng biểu.',
        ]
    },
    {
        id: 'ty_hu_nhe', title: 'Tỳ Hư (Trường hợp 1 – Bị nhẹ)', icon: Shield, color: 'text-green-400', symptoms: [
            'Ăn nhanh no, bụng đầy nhẹ → Vị khí hư, nạp hóa yếu.',
            'Thỉnh thoảng ợ hơi, ợ chua nhẹ → Tỳ vị hư hàn, khí nghịch lên trên.',
            'Ăn đồ lạnh dễ rối loạn tiêu hóa → Trung dương hư, hàn tà phạm tỳ.',
            'Buổi sáng sôi bụng, đi cầu phân mềm → Tỳ hư, vận hóa yếu, thấp ẩm sinh.',
            'Lúc táo lúc lỏng → Tỳ khí hư, thăng giáng vô lực.',
            'Ăn xong buồn ngủ, nặng đầu → Tỳ khí suy, thanh dương bất thăng.',
            'Môi nhạt, da hơi vàng → Tỳ hư sinh khí huyết kém.',
            'Bụng mềm, ấn lõm nhẹ → Trung hư, dương khí bất túc.',
            'Ăn xong phải ngồi nghỉ mới dễ chịu → Vị hư, nạp hóa đình trệ.',
            'Hay chán ăn → Tỳ vị khí suy, mất cảm giác vị.',
        ]
    },
    {
        id: 'ty_hu_nang', title: 'Tỳ Hư (Trường hợp 2 – Bị nặng)', icon: Shield, color: 'text-yellow-500', symptoms: [
            'Đau âm ỉ hoặc nóng rát vùng thượng vị, đau khi đói, giảm khi ăn → Vị âm hư, tân dịch hao, hư hỏa quấy vị, khí huyết ứ trệ, trung tiêu mất hòa.',
            'Ợ hơi, ợ chua, trào ngược, nóng rát vùng ngực, họng chua đắng → Vị khí nghịch, tỳ khí hư, đàm thấp uẩn, thấp nhiệt làm khí cơ nghịch thượng.',
            'Vi khuẩn HP dương tính, điều trị dai dẳng, tái phát nhiều lần → HP cư trú làm tổn thương niêm mạc vị, sinh thấp nhiệt, khí huyết ứ trệ, khiến vị khí hư yếu, bệnh khó khỏi dứt điểm.',
            'Đi cầu nhiều lần trong ngày, phân lỏng hoặc nát, không hết cảm giác muốn đi → Tỳ khí hư, đại tràng mất nhiếp, khí trệ trung hạ tiêu, vận hóa kém khiến thủy thấp không hóa.',
            'Đau quặn bụng từng cơn, sôi bụng, đi ngoài xong đỡ đau → Tỳ dương hư, hàn khí ngưng, can khí uất khắc tỳ, khí cơ trệ gây thống.',
            'Bụng chướng, đầy hơi, đau tăng khi căng thẳng, stress, ăn đồ lạ → Trung khí yếu, tỳ vị hư, thấp trệ uất ở đại trường, khi cảm xúc dao động thì can khí nghịch, khí cơ bất hòa.',
            'Hội chứng ruột kích thích (IBS): lúc táo lúc lỏng, đau bụng, sôi bụng, đi phân nhầy, đau giảm sau khi đi cầu → Tỳ khí hư, can khí uất, thăng giáng thất điều; khí cơ nghịch loạn khiến ruột co bóp bất thường, đại tiện không ổn định.',
        ]
    },
    {
        id: 'can_nhiet', title: 'Can Nhiệt – Khí Trệ, Nóng Gan', icon: Zap, color: 'text-orange-400', symptoms: [
            'Hay cáu gắt, dễ bực → Can khí uất hóa hỏa, nhiệt uất nội sinh.',
            'Mất ngủ do đầu nóng, nhiều suy nghĩ → Can hỏa quấy tâm, thần bất an.',
            'Miệng đắng, hơi thở hôi → Can đởm nhiệt, khí uất hóa hỏa.',
            'Mắt đỏ, hay khô, chảy nước khi gió → Can khai khiếu ra mắt, can hỏa bốc.',
            'Da nổi mụn, mẩn đỏ, ngứa → Can nhiệt uất độc phát ra biểu.',
            'Uống bia rượu dễ đỏ mặt, nóng người → Can dương vượng, hỏa khí bốc.',
            'Nước tiểu vàng, ít → Nhiệt tà vào lý, tân dịch giảm.',
            'Đau tức sườn, ngực đầy → Can khí uất, khí cơ bất điều.',
            'Ăn nhanh no, dễ đầy bụng → Can khí phạm vị, tỳ vị mất hòa.',
            'Căng thẳng dễ bốc hỏa, nóng đầu → Can hỏa thượng viêm.',
            'Ngủ dậy mệt đầu → Can khí uất, huyết không dưỡng não.',
            'Da sạm, không đều màu → Can huyết uất trệ, sắc không tươi.',
            'Mụn quanh cằm, vai, lưng → Can uất, huyết nhiệt phát biểu.',
            'Thở ngắn, hay thở dài → Can khí uất, khí cơ bất hành.',
        ]
    },
    {
        id: 'tam_hu', title: 'Tâm Hư – Tâm Huyết Hư, Thần Khí Suy', icon: Heart, color: 'text-pink-400', symptoms: [
            'Hay hồi hộp, tim đập nhanh → Tâm khí hư, huyết không dưỡng mạch.',
            'Thở hụt hơi, nói nhiều mệt → Tâm khí bất túc, khí hư tổn mạch.',
            'Mất ngủ, nhiều mộng, ngủ không sâu → Tâm huyết hư, thần không yên.',
            'Thường lo nghĩ, suy nghĩ nhiều → Tâm tỳ lưỡng hư, tư lự thương tỳ.',
            'Dễ căng thẳng, lo lắng vô cớ → Tâm khí yếu, can khí nghịch.',
            'Trí nhớ kém, khó tập trung → Tâm huyết hư, thần mất chỗ yên.',
            'Dễ giật mình, sợ tiếng động → Tâm âm hư, thần không an.',
            'Mặt nhợt, môi nhạt → Tâm huyết hư, sắc diện thiếu nhuận.',
            'Người yếu, tay run nhẹ → Tâm khí hư, dương khí bất túc.',
            'Cảm giác hụt hơi khi leo cầu thang → Tâm khí hư, mạch khí suy.',
            'Tim đập nhanh khi xúc động → Tâm huyết hư, khí không nhiếp thần.',
            'Buổi tối dễ bồn chồn, khó yên → Tâm thần bất an, huyết không dưỡng thần.',
            'Hay thở dài, mệt ngực → Tâm khí yếu, khí trệ ức nghẽn.',
            'Đầu óc mờ mịt → Tâm huyết hư, não thiếu dưỡng.',
            'Tinh thần yếu, hay lo → Tâm khí hư, thần mệt.',
            'Ngại ồn, thích yên tĩnh → Tâm thần bất an, âm huyết hư.',
            'Sáng dậy người mệt → Tâm khí chưa phục, khí huyết yếu.',
            'Tâm trạng thất thường, dễ xúc động → Tâm huyết hư, thần bất định.',
            'Hay buồn vô cớ → Tâm khí hư, thần chí tổn thương.',
            'Cơ thể nhẹ, tinh thần yếu → Tâm khí hư, dương bất thăng, thần mất sở dưỡng.',
        ]
    }
];

export const SYSTEM_PROMPT = `Bạn là một chuyên gia Đông y. Hãy phân tích các triệu chứng sau và trả về kết quả dưới dạng một luồng (stream) các đối tượng JSON, mỗi đối tượng trên một dòng mới (định dạng JSONL).
Tuyệt đối KHÔNG sử dụng markdown fences như \`\`\`json ... \`\`\` quanh các đối tượng JSON.

Mỗi đối tượng JSON phải chứa CHÍNH XÁC MỘT KEY, tương ứng với một phần của bản phân tích, theo thứ tự nghiêm ngặt sau: 'trieuChung', 'ketLuan', 'phanTichLuoi' (chỉ khi có ảnh lưỡi), 'huongHoTro', 'goiYSanPham', 'cachDung', 'anUongSinhHoat'.

QUY TẮC PHÂN TÍCH:
1. Gom triệu chứng vào từng nhóm Đông y phù hợp (Âm Hư, Dương Hư, Tỳ Hư, Can Nhiệt, Tâm Hư).
2. Nếu khách nhập tự do, hãy mapping (gán) triệu chứng đó vào nhóm phù hợp (ví dụ: "tóc rụng" -> Âm Hư). Nếu triệu chứng nhập không có dấu (ví dụ: 'dau lung'), hãy tự động diễn giải thành có dấu (ví dụ: 'đau lưng') để phân tích.
3. Nhóm nào có số lượng triệu chứng được gán nhiều nhất sẽ là TÌNH TRẠNG CHÍNH.
4. Nhóm thứ 2 và thứ 3, nếu có ≥2 triệu chứng, được xem là PHỐI HỢP.
5. Nếu có từ 3 nhóm trở lên cùng yếu (có triệu chứng) thì gọi là HƯ TỔNG HỢP, trong đó phải ghi rõ các nhóm yếu.

*LƯU Ý ĐẶC BIỆT VỀ LƯỠI:* Nếu có cung cấp HÌNH ẢNH LƯỠI, hãy thực hiện phân tích chi tiết vào đối tượng JSON có key "phanTichLuoi". Mô tả rõ Sắc lưỡi, Rêu lưỡi, Hình thái và đưa ra biện chứng liên quan. Thông tin này sẽ được dùng để củng cố cho phần KẾT LUẬN tổng thể.

7. Dựa trên phân tích, hãy sử dụng các sản phẩm sau để gợi ý (chỉ dùng các sản phẩm này, gợi ý tối đa 3 sản phẩm):
    A. Viên bổ thận âm (Thành phần: Thục địa, hoài sơn, sơn thủ, phục linh, hà thủ ô, trạch tà, đan bì, đảng sâm) - Hỗ trợ Thận Âm hư, tóc, xương khớp, kinh nguyệt, mồ hôi trộm, nóng trong. Liều dùng: Ngày 3 lần, 30 viên/lần sau ăn. Một lọ dùng trong khoảng 1 tháng. Kiêng: Không ăn rau muống, giá đỗ, đậu xanh.
    B. Viên bổ thận dương (Thành phần: Thục địa, sơn thù, hoài sơn, ba kích, nhục thung dung, Dâm dương hoặc...) - Hỗ trợ Thận Dương hư, lạnh bụng, tiêu chảy, yếu sinh lý, tiểu đêm, chịu lạnh kém, da xanh. Liều dùng: Ngày 3 lần, 30 viên/lần sau ăn. Một lọ dùng trong khoảng 1 tháng. Kiêng: Không ăn rau muống sống, giá đỗ, đậu xanh (vì giải thuốc).
    C. Bổ Tỳ hoàn (Dưỡng tâm - kiện tỳ) (Thành phần: đương quy, đảng sâm, hoàng kỳ, bạch truật, phục thần, viễn chí, long nhãn, đại táo...) - Hỗ trợ Tỳ Khí/Dương hư, Tâm Huyết/Khí hư. Dùng cho suy nhược, kém ăn, mất ngủ, hồi hộp, tiêu hóa kém, thiếu khí huyết. Liều dùng: Người lớn: Ngày 3 lần, 30 viên/lần; Trẻ em (dưới 10 tuổi): Ngày 3 lần, 20 viên/lần trước ăn 30 phút. Một lọ dùng trong khoảng 25 ngày. Kiêng: rau muống, giá đỗ, đậu xanh, nước đá lạnh. Trẻ em không uống được viên có thể nghiền ra thêm ít đường.
    D. Bình Can Mộc (Thành phần: nhân trần bắc, ý dĩ, chỉ tử,...) - Giúp thanh nhiệt, giải độc mát gan, tăng cường chức năng gan. Dùng cho người có triệu chứng thuộc nhóm CAN NHIỆT (nóng trong, dễ cáu gắt, tức ngực, nổi mẩn ngứa, mụn nhọt, mất ngủ do nóng gan). Liều dùng: Ngày 2 lần mỗi lần 45-50 viên, sau ăn 10 phút. 1 hộp dùng khoảng 25 ngày. Kiêng: rau muống, giá đỗ, đậu xanh, đồ cay nóng, rượu bia.
    E. Dạ dày đơn (Thành phần: Ô tặc cốt, nga truật, lá khôi,...) - Dùng cho trường hợp TỲ HƯ BỊ NẶNG với triệu chứng điển hình của dạ dày (viêm loét, HP, trào ngược, ăn không tiêu, đầy hơi). Uống trước ăn 30 phút cho viêm loét/HP, sau ăn cho các vấn đề tiêu hóa khác. Ngày 3 lần, 30 viên/lần. 1 hộp dùng khoảng 20 ngày. Kiêng: rau muống, giá đỗ, đậu xanh.
    F. Đại Tràng Hoàn (Thành phần: Phá cố chỉ, thảo quả,...) - Dùng cho trường hợp TỲ HƯ BỊ NẶNG với triệu chứng điển hình của đại tràng (rối loạn tiêu hoá, hội chứng ruột kích thích, đi cầu sáng sớm, phân nát). Uống ngày 3 lần, 20-25 viên/lần sau ăn 10 phút. 1 hộp dùng khoảng 25 ngày. Kiêng khem nghiêm ngặt đồ hàn lạnh, tanh, nhiều dầu mỡ.

    ***LOGIC GỢI Ý ĐẶC BIỆT:***
    - Khi có triệu chứng thuộc nhóm "Tỳ Hư":
        - Nếu có các triệu chứng trong nhóm "Tỳ Hư - Bị nặng":
            - Nếu có song song cả triệu chứng của dạ dày (ví dụ: đau thượng vị, HP, trào ngược) VÀ triệu chứng của đại tràng (ví dụ: đi cầu nhiều lần, IBS, đau quặn bụng), hãy gợi ý cả **Dạ dày đơn** và **Đại Tràng Hoàn**. Trong trường hợp này, KHÔNG gợi ý **Bổ Tỳ hoàn**.
            - Nếu chỉ có triệu chứng của dạ dày, ưu tiên gợi ý **Dạ dày đơn** dùng 1 hộp TRƯỚC TIÊN. Sau đó mới đề cập tới việc dùng **Bổ Tỳ hoàn** để phục hồi lâu dài.
            - Nếu chỉ có triệu chứng của đại tràng, ưu tiên gợi ý **Đại Tràng Hoàn** dùng 1 hộp TRƯỚC TIÊN. Sau đó mới đề cập tới việc dùng **Bổ Tỳ hoàn** để phục hồi lâu dài.
        - Nếu chỉ có các triệu chứng trong nhóm "Tỳ Hư - Bị nhẹ" (và không có triệu chứng nào của nhóm 'Bị nặng'), sản phẩm chính cần gợi ý là "Bổ Tỳ hoàn".
    - Gợi ý tối đa 3 sản phẩm.

8. QUY TẮC ĐỊNH DẠNG NỘI DUNG TRONG JSON:
    - Bắt buộc sử dụng Markdown **để in đậm** TÊN TÌNH TRẠNG (ví dụ: **Dương Hư**) và TÊN SẢN PHẨM (ví dụ: **Viên bổ thận âm**) để tăng tính thẩm mỹ và dễ đọc.
    - 'trieuChung': Phải là một mảng chuỗi (Array<string>). Liệt kê CHÍNH XÁC VÀ ĐẦY ĐỦ TẤT CẢ các triệu chứng người dùng cung cấp (cả chọn và tự nhập). Với mỗi triệu chứng, hãy định dạng theo mẫu: "Tên triệu chứng → Giải thích biện chứng Đông y". Với triệu chứng được chọn từ danh sách, sử dụng lại phần giải thích biện chứng đã có. Với triệu chứng TỰ NHẬP, BẮT BUỘC phải tự viết một giải thích biện chứng RÕ RÀNG VÀ CHUYÊN SÂU theo logic Đông y. Ví dụ (cho triệu chứng tự nhập): 'tóc rụng nhiều → Thận tàng tinh, tinh sinh huyết, tóc là phần thừa của huyết. Thận hư không tàng tinh, Can huyết hư không đủ nuôi dưỡng, dẫn đến tóc rụng.'
    - 'ketLuan': Sử dụng xuống dòng kép (\\n\\n) để phân tách rõ ràng phần tóm tắt tổng quát và các điểm phân tích chi tiết.
    - 'phanTichLuoi': **Chỉ tạo key này nếu có ảnh lưỡi được cung cấp.** Định dạng: Mỗi ý, mỗi câu phải xuống dòng. Sử dụng ký tự xuống dòng \\n và dấu gạch đầu dòng (-) cho các ý liệt kê.
    - 'huongHoTro': Phải nêu rõ HƯỚNG điều trị theo Đông y. Cần biện chứng rõ ràng, chi tiết, và dễ hiểu. Sử dụng xuống dòng hợp lý (\\n hoặc \\n\\n) để phân tách các ý lớn.
    - 'goiYSanPham': Định dạng BẮT BUỘC: Danh sách gạch đầu dòng (-), mỗi sản phẩm trên một dòng, in đậm tên sản phẩm, kèm phân tích thành phần, tác dụng. Sử dụng ký tự xuống dòng \\n để phân tách các mục.
    - 'cachDung': Phải tóm tắt ĐẦY ĐỦ CÁCH DÙNG của TỪNG SẢN PHẨM được gợi ý, mỗi sản phẩm trên một dòng riêng biệt, bao gồm liều lượng và thời gian sử dụng ước tính. Sau khi liệt kê xong liều dùng của tất cả các sản phẩm, phải có một dòng phân cách rõ ràng '--- KIÊNG KỴ CHUNG ---' và sau đó là PHẦN KIÊNG KỴ TỔNG HỢP cho TẤT CẢ các sản phẩm được gợi ý (gộp chung các mục kiêng kỵ giống nhau, liệt kê dạng gạch đầu dòng). Sử dụng ký tự xuống dòng \\n để phân tách các câu/ý.
    - 'anUongSinhHoat': Định dạng BẮT BUỘC là một chuỗi (string) duy nhất. Bên trong chuỗi này, mỗi lời khuyên phải được trình bày trên một dòng riêng, bắt đầu bằng một dấu gạch ngang và một dấu cách ('- '). Sử dụng ký tự xuống dòng ('\\n') để phân tách các dòng. Ví dụ: "- Uống đủ nước ấm.\\n- Ngủ trước 11 giờ đêm."

VÍ DỤ LUỒNG ĐẦU RA:
{"trieuChung": ["Triệu chứng 1 → Biện chứng 1", "Triệu chứng 2 → Biện chứng 2"]}
{"ketLuan": "Tình trạng chính của bạn là **Thận Dương Hư**..."}
{"huongHoTro": "Cần tập trung vào việc **bổ mệnh môn hỏa**..."}
... và tiếp tục cho các phần còn lại.`;