import { SymptomGroup } from './types';
import { Sun, Moon, Zap, Shield, Droplet, Package } from './components/Icons';

export const SYMPTOM_GROUPS: SymptomGroup[] = [
    {
        id: 'than_am_hu',
        title: 'THẬN ÂM HƯ – MẤT TÂN DỊCH, NHIỆT NỘI, KHÔ NÓNG TỪ TRONG',
        icon: Moon,
        color: 'text-blue-400',
        symptoms: [
            'Nóng trong người, sốt nhẹ về chiều → Âm hư tức là phần nước, phần mát trong cơ thể bị tổn. Khi âm không đủ để kiềm chế dương, dương khí trở nên hư thịnh mà sinh ra cảm giác nóng trong, đặc biệt về chiều tối khi âm càng suy.',
            'Mồ hôi trộm ban đêm, khát nước về đêm → Âm dịch hư, không thu liễm được dương, ban đêm dương khí tán ra ngoài gây ra mồ hôi trộm; khát nước là biểu hiện của tân dịch hao.',
            'Da khô, môi khô, tóc rụng, tóc bạc sớm → Âm huyết là nguồn nuôi dưỡng da, tóc, móng. Khi âm suy, huyết giảm, phần dinh dưỡng không lên được bì mao, khiến da khô, tóc yếu và bạc sớm.',
            'Lưỡi nứt nẻ, ít rêu → Lưỡi là nơi phản chiếu của tân dịch. Âm dịch cạn, lưỡi hẹp dài, khô và nứt, rêu ít do thiếu tân dịch sinh rêu.',
            'Gầy sút cân, người mảnh → Âm tinh không đủ để nuôi cơ nhục, thân thể hao mòn.',
            'Hồi hộp, tức ngực, khó ngủ → Tâm âm hư, huyết không đủ để dưỡng thần; tâm thần không yên nên dễ trằn trọc, khó ngủ.',
            'Ho khan, đờm ít, khó khạc → Phế âm tổn, phế mất nhuận hóa, đờm ít và dính, khạc khó.',
            'Chóng mặt, hoa mắt, trí nhớ giảm → Tinh huyết hư, não và tủy thiếu dinh dưỡng; thận tinh không đủ sinh tủy để nuôi não.',
            'Tiểu vàng sậm, ít → Nhiệt hư bốc lên, tân dịch hao tổn, nước tiểu trở nên ít và đậm.',
            'Đại tiện táo, khô → Tân dịch không thông nhuận ruột, âm huyết kém, gây táo.',
            'Nữ: kinh ít, màu nhạt, có khi vô kinh → Huyết âm hư, kinh nguồn không đủ, huyết kém hóa sinh.',
            'Nam: di tinh, mộng tinh, lưng gối mỏi → Thận tinh hư, âm không đủ để nhiếp dương, tinh khí tản mát.',
        ]
    },
    {
        id: 'than_duong_hu',
        title: 'THẬN DƯƠNG HƯ – LẠNH TỪ TRONG, THIẾU HỎA, KHÍ LỰC SUY',
        icon: Sun,
        color: 'text-red-400',
        symptoms: [
            'Lạnh quanh năm, nặng khi mưa hoặc mùa đông → Dương khí là nguồn ấm của cơ thể. Khi thận dương suy, cơ thể mất khả năng tự điều hòa nhiệt, nên luôn cảm thấy lạnh, đặc biệt khi thời tiết ẩm hoặc lạnh.',
            'Lưng lạnh, gối lạnh buốt → Mệnh môn hỏa suy, dương không đủ để sưởi ấm vùng thắt lưng và đầu gối – nơi khí thận chủ trị.',
            'Tay chân lạnh, sợ gió lạnh → Dương hư, khí huyết không thông ra tứ chi; máu không đủ ấm để nuôi đầu chi.',
            'Mệt mỏi, hơi thở yếu → Dương khí là động lực của sự sống. Khi dương hư, công năng tạng phủ yếu, khí lực giảm, hơi thở ngắn.',
            'Buồn ngủ, uể oải → Thiếu dương khí để thúc đẩy tinh thần, dương không vượng nên dễ mệt mỏi.',
            'Sợ gió, thích ấm → Hàn nội sinh, cơ thể tự cảm thấy lạnh và thích chăn ấm, tránh gió.',
            'Tiểu nhiều, tiểu đêm, nước tiểu trong → Thận dương không đủ khí hóa để cô đặc và giữ nước, nên nước tiểu loãng, đi nhiều.',
            'Nam: tinh loãng, giảm ham muốn → Mệnh môn hỏa suy, tinh lạnh, dương khí yếu, sinh lực giảm.',
            'Nữ: đau bụng kinh, máu đen, vón cục → Hàn ngưng huyết trệ, mạch huyết bị co, gây đau và cục.',
            'Đi ngoài sáng sớm, phân sống → Thận dương yếu, không ôn được tỳ dương, khiến tỳ mất chức năng vận hóa.',
            'Bụng dưới lạnh, ăn đồ nguội dễ đau → Hàn khí phạm hạ tiêu, dương suy không tán được lạnh.',
            'Mặt trắng nhợt, môi nhạt → Dương hư, khí huyết vận hành chậm, da không được nhu dưỡng.',
        ]
    },
    {
        id: 'ty_khi_hu',
        title: 'TỲ KHÍ HƯ – ĂN KÉM, HẤP THU KÉM, KHÍ HUYẾT YẾU',
        icon: Shield,
        color: 'text-green-400',
        symptoms: [
            'Ăn ít, không ngon → Tỳ khí yếu, vị không vận hóa, thức ăn khó tiêu.',
            'Bụng mềm, hay ậm ạch, ợ hơi → Trung tiêu khí trệ, thức ăn đình tụ, vị không giáng được.',
            'Người gầy, khó tăng cân → Tỳ khí hư, không sinh đủ khí huyết để nuôi dưỡng.',
            'Dễ mệt, làm ít đã đuối → Tỳ khí yếu, nguồn năng lượng sinh hoạt không đủ.',
            'Sắc mặt nhợt, môi nhạt → Tỳ chủ sinh huyết, khi khí hư thì huyết sinh hóa kém.',
            'Tay chân yếu, run → Tỳ hư, khí không ra được tứ chi.',
            'Hoa mắt, chóng mặt → Khí huyết bất túc, não thiếu dinh dưỡng.',
            'Lo âu, hồi hộp → Tỳ hư không sinh đủ huyết, tâm không được dưỡng.',
            'Hay quên, kém tập trung → Tỳ hư, thần khí yếu, trí nhớ giảm.',
            'Ngủ chập chờn → Tâm Tỳ lưỡng hư, huyết không đủ để an thần.',
        ]
    },
    {
        id: 'vi_khi_hu',
        title: 'VỊ KHÍ HƯ – ĐẦY TỨC, TRÀO NGƯỢC, KHÓ TIÊU',
        icon: Shield,
        color: 'text-yellow-500',
        symptoms: [
            'Ăn xong đầy tức, ợ hơi → Vị khí hư, công năng tiêu hóa yếu, thức ăn đình trệ.',
            'Trào ngược, nghẹn cổ → Khí vị nghịch lên thay vì giáng xuống, gây nghẹn.',
            'Đau rát vùng thượng vị → Vị âm hư, vị hỏa bốc, niêm mạc vị bị tổn thương.',
            'Có khuẩn HP, viêm loét → Nhiệt uẩn lâu ngày, vị âm hao, tỳ thấp sinh độc.',
            'Buồn nôn, chán ăn → Vị khí yếu, không nhận được thức ăn.',
            'Sợ đồ dầu mỡ → Thấp trệ, vị vận hóa chậm, dễ đầy trướng.',
            'Miệng hôi, rêu vàng → Thấp nhiệt tích vị, làm đọng thực khí.',
            'Đại tiện lúc táo lúc nát → Tỳ vị mất điều hòa, khí cơ loạn.',
            'Nặng vùng dạ dày → Thực tích, khí trệ, vận động vị giảm.',
            'Đau khi đói hoặc ăn vào → Vị âm hư, hư nhiệt phạm vị.',
        ]
    },
    {
        id: 'can_uat_nhiet',
        title: 'CAN UẤT – CAN NHIỆT – NÓNG GAN, CÁU GẮT, MẤT NGỦ, MÓNG GIÒN',
        icon: Zap,
        color: 'text-orange-400',
        symptoms: [
            'Dễ cáu gắt, đau đầu hai thái dương → Can khí uất, dương khí bốc lên gây đau đầu.',
            'Nửa thân trên nóng, tay chân lạnh → Can dương bốc lên, âm không đủ điều hòa, dương khí nghịch.',
            'Mắt đỏ, mỏi, hoa mắt → Can khai khiếu ra mắt, can huyết hư làm mắt mờ.',
            'Da dễ bầm, môi khô → Huyết nhiệt, tân dịch giảm, da môi khô ráp.',
            'Nhiệt miệng, lở miệng → Can hỏa uất, nhiệt bốc lên phần trên.',
            'Móng tay giòn, dễ gãy → Can chủ cân, huyết yếu, cân móng thiếu dưỡng.',
            'Da vàng, mắt vàng, sạm tối → Can thấp nhiệt, khí huyết ứ trệ, sắc mặt sạm.',
            'Bụng chướng, sườn tức → Can khí phạm tỳ vị, khí cơ mất điều hòa.',
            'Nước tiểu vàng, nóng mặt khi uống rượu → Can nhiệt uất, đởm khí không thông.',
            'Mất ngủ, thức giấc giữa đêm → Can hỏa nhiễu tâm, thần không an.',
            'Huyết áp cao, đau đầu → Can dương vượng, khí huyết nghịch lên đầu.',
            'Tính khí thất thường, stress → Can khí uất, khí không thư thông.',
        ]
    },
    {
        id: 'dai_trang_hu_han',
        title: 'ĐẠI TRÀNG HƯ HÀN – ĐI NGOÀI NHIỀU, BỤNG LẠNH, RUỘT YẾU',
        icon: Droplet,
        color: 'text-cyan-400',
        symptoms: [
            'Đi cầu sáng sớm, phân nát → Dương khí không ôn vận được tỳ vị.',
            'Bụng sôi, đau âm ỉ → Hàn khí ứ đọng, khí huyết vận hành kém.',
            'Tay chân lạnh, bụng lạnh → Tỳ thận dương hư, hàn khí thịnh.',
            'Ăn xong muốn đi ngoài → Tỳ khí suy, thức ăn chưa hóa đã hạ.',
            'Mệt sau đi vệ sinh → Khí thoát theo đại tiện, nguyên khí suy.',
            'Đi nhiều lần, phân sống → Hàn thấp xâm ruột, tiêu hóa kém.',
            'Chướng bụng, xì hơi → Trung tiêu hư hàn, khí trệ bất hành.',
            'Phân có thức ăn chưa tiêu → Tỳ vị vận hóa kém, hấp thu giảm.',
            'Sụt cân, người yếu → Dương khí suy, không sinh hóa được khí huyết.',
            'Mệt lạnh sau đi cầu → Dương khí tổn, hàn chưa giải.',
        ]
    },
    {
        id: 'phong_thap_ty',
        title: 'PHONG THẤP TÝ – ĐAU NHỨC, TÊ BÌ, TẮC KINH LẠC',
        icon: Package,
        color: 'text-purple-400',
        symptoms: [
            'Đau vai gáy, lưng, đầu gối → Phong hàn thấp làm bế tắc kinh lạc, khí huyết không thông.',
            'Tê bì tay chân → Huyết hư, phong thấp làm tắc mạch.',
            'Khớp sưng, kêu lục cục → Thấp trệ đọng lại trong khớp, dịch khớp không lưu thông.',
            'Cứng khớp buổi sáng → Hàn thấp ngưng đọng, dương khí yếu không hóa thấp.',
            'Đau tăng khi trời lạnh ẩm → Hàn thấp thịnh, khí huyết càng bị ngưng trệ.',
            'Mỏi lưng khi cúi → Thận hư, cân cốt không được nuôi dưỡng.',
            'Đau thần kinh tọa → Hàn thấp phạm kinh can thận, khí huyết bị ép.',
            'Đau cổ tay, ngón tay → Thấp tý lưu lại tại khớp nhỏ, khí huyết đình trệ.',
            'Nhức mỏi khi đổi thời tiết → Vệ khí yếu, phong thấp dễ nhập.',
            'Nặng chân, chậm di chuyển → Thấp trệ, kinh lạc không thông, tuần hoàn trì trệ.',
        ]
    }
];

export const SYSTEM_PROMPT = `Bạn là một chuyên gia Đông y. Dựa trên các triệu chứng được cung cấp, hãy phân tích và trả về kết quả dưới dạng một luồng (stream) các đối tượng JSON, mỗi đối tượng trên một dòng mới (định dạng JSONL).
Tuyệt đối KHÔNG sử dụng markdown fences như \`\`\`json ... \`\`\` quanh các đối tượng JSON.

**QUAN TRỌNG: Bạn sẽ nhận được 2 loại triệu chứng: (1) triệu chứng có sẵn đã có biện chứng (ví dụ: 'Da khô... → Âm huyết là nguồn nuôi dưỡng...') và (2) triệu chứng do người dùng tự nhập (ví dụ: 'đầy bụng').**

Mỗi đối tượng JSON phải chứa CHÍNH XÁC MỘT KEY, theo thứ tự nghiêm ngặt sau: 'bienChungTrieuChung', 'ketLuan', 'phanTichLuoi' (chỉ khi có ảnh lưỡi), 'huongHoTro', 'goiYSanPham', 'lyDoKetHop' (chỉ khi gợi ý >=2 sản phẩm), 'cachDung', 'anUongSinhHoat'.

QUY TẮC PHÂN TÍCH:
1. **Biện chứng triệu chứng nhập thêm**: Đối với MỖI triệu chứng do người dùng tự nhập, hãy tạo ra một phần biện chứng ngắn gọn, chi tiết theo cấu trúc "Tên triệu chứng → Giải thích sâu sắc theo góc nhìn Đông y". Gộp tất cả các chuỗi này vào một mảng (array of strings) và trả về trong đối tượng JSON có key là "bienChungTrieuChung". Ví dụ: nếu người dùng nhập 'đầy bụng' và 'khó thở', kết quả sẽ là {"bienChungTrieuChung": ["Đầy bụng → Tỳ vị hư yếu, khí cơ đình trệ, thức ăn không được vận hoá gây trướng khí.", "Khó thở → Phế khí suy yếu hoặc thận không nạp khí, làm cho hơi thở ngắn, hụt hơi."]}. **Tuyệt đối KHÔNG đưa các triệu chứng có sẵn vào đây.** Nếu không có triệu chứng tự nhập, trả về một mảng rỗng: {"bienChungTrieuChung": []}.
2. Gom tất cả triệu chứng (cả có sẵn và tự nhập) vào từng nhóm Đông y phù hợp (Thận Âm Hư, Thận Dương Hư, Tỳ Khí Hư, Vị Khí Hư, Can Uất – Can Nhiệt, Đại Tràng Hư Hàn, Phong Thấp Tý).
3. Nếu khách nhập tự do, hãy mapping (gán) triệu chứng đó vào nhóm phù hợp. Nếu triệu chứng nhập không có dấu (ví dụ: 'dau lung'), hãy tự động diễn giải thành có dấu (ví dụ: 'đau lưng') để phân tích.
4. Nhóm nào có số lượng triệu chứng được gán nhiều nhất sẽ là TÌNH TRẠNG CHÍNH.
5. Nhóm thứ 2 và thứ 3, nếu có ≥2 triệu chứng, được xem là PHỐI HỢP.
6. Nếu có từ 3 nhóm trở lên cùng yếu (có triệu chứng) thì gọi là HƯ TỔNG HỢP, trong đó phải ghi rõ các nhóm yếu.

*LƯU Ý ĐẶC BIỆT VỀ LƯỠI:* Nếu có cung cấp HÌNH ẢNH LƯỠI, hãy thực hiện phân tích chi tiết vào đối tượng JSON có key "phanTichLuoi". Mô tả rõ Sắc lưỡi, Rêu lưỡi, Hình thái và đưa ra biện chứng liên quan. Thông tin này sẽ được dùng để củng cố cho phần KẾT LUẬN tổng thể.

7. Dựa trên phân tích, hãy sử dụng các sản phẩm sau để gợi ý (chỉ dùng các sản phẩm này, gợi ý tối đa 3 sản phẩm):
    A. Viên bổ thận âm (Thành phần: Thục địa, hoài sơn, sơn thủ, phục linh, hà thủ ô, trạch tà, đan bì, đảng sâm) - Hỗ trợ Thận Âm hư, tóc, xương khớp, kinh nguyệt, mồ hôi trộm, nóng trong. Liều dùng: Ngày 3 lần, 30 viên/lần sau ăn. Một lọ dùng trong khoảng 1 tháng. Kiêng: Không ăn rau muống, giá đỗ, đậu xanh.
    B. Viên bổ thận dương (Thành phần: Thục địa, sơn thù, hoài sơn, ba kích, nhục thung dung, Dâm dương hoặc...) - Hỗ trợ Thận Dương hư, lạnh bụng, tiêu chảy, yếu sinh lý, tiểu đêm, chịu lạnh kém, da xanh. Liều dùng: Ngày 3 lần, 30 viên/lần sau ăn. Một lọ dùng trong khoảng 1 tháng. Kiêng: Không ăn rau muống sống, giá đỗ, đậu xanh (vì giải thuốc).
    C. Bổ Tỳ hoàn (Dưỡng tâm - kiện tỳ) (Thành phần: đương quy, đảng sâm, hoàng kỳ, bạch truật, phục thần, viễn chí, long nhãn, đại táo...) - Hỗ trợ Tỳ Khí/Dương hư, Tâm Huyết/Khí hư. Dùng cho suy nhược, kém ăn, mất ngủ, hồi hộp, tiêu hóa kém, thiếu khí huyết. Liều dùng: Người lớn: Ngày 3 lần, 30 viên/lần; Trẻ em (dưới 10 tuổi): Ngày 3 lần, 20 viên/lần trước ăn 30 phút. Một lọ dùng trong khoảng 25 ngày. Kiêng: rau muống, giá đỗ, đậu xanh, nước đá lạnh. Trẻ em không uống được viên có thể nghiền ra thêm ít đường.
    D. Bình Can Mộc (Thành phần: nhân trần bắc, ý dĩ, chỉ tử,...) - Giúp thanh nhiệt, giải độc mát gan, tăng cường chức năng gan. Dùng cho người có triệu chứng thuộc nhóm CAN UẤT – CAN NHIỆT (nóng trong, dễ cáu gắt, tức ngực, nổi mẩn ngứa, mụn nhọt, mất ngủ do nóng gan). Liều dùng: Ngày 2 lần mỗi lần 45-50 viên, sau ăn 10 phút. 1 hộp dùng khoảng 25 ngày. Kiêng: rau muống, giá đỗ, đậu xanh, đồ cay nóng, rượu bia.
    E. Dạ dày đơn (Thành phần: Ô tặc cốt, nga truật, lá khôi,...) - Dùng cho trường hợp VỊ KHÍ HƯ với triệu chứng điển hình của dạ dày (viêm loét, HP, trào ngược, ăn không tiêu, đầy hơi). Uống trước ăn 30 phút cho viêm loét/HP, sau ăn cho các vấn đề tiêu hóa khác. Ngày 3 lần, 30 viên/lần. 1 hộp dùng khoảng 20 ngày. Kiêng: rau muống, giá đỗ, đậu xanh.
    F. Đại Tràng Hoàn (Thành phần: Phá cố chỉ, thảo quả,...) - Dùng cho trường hợp ĐẠI TRÀNG HƯ HÀN với triệu chứng điển hình của đại tràng (rối loạn tiêu hoá, hội chứng ruột kích thích, đi cầu sáng sớm, phân nát). Uống ngày 3 lần, 20-25 viên/lần sau ăn 10 phút. 1 hộp dùng khoảng 25 ngày. Kiêng khem nghiêm ngặt đồ hàn lạnh, tanh, nhiều dầu mỡ.

    ***LOGIC GỢI Ý ĐẶC BIỆT:***
    - Khi có triệu chứng thuộc các nhóm liên quan đến Tỳ-Vị-Đại Tràng:
        - Nếu có triệu chứng thuộc nhóm **Vị Khí Hư** VÀ nhóm **Đại Tràng Hư Hàn**, hãy gợi ý cả **Dạ dày đơn** và **Đại Tràng Hoàn**. Trong trường hợp này, KHÔNG gợi ý **Bổ Tỳ hoàn**.
        - Nếu chỉ có triệu chứng thuộc nhóm **Vị Khí Hư**, ưu tiên gợi ý **Dạ dày đơn** dùng 1 hộp TRƯỚC TIÊN. Sau đó mới đề cập tới việc dùng **Bổ Tỳ hoàn** để phục hồi lâu dài.
        - Nếu chỉ có triệu chứng thuộc nhóm **Đại Tràng Hư Hàn**, ưu tiên gợi ý **Đại Tràng Hoàn** dùng 1 hộp TRƯỚC TIÊN. Sau đó mới đề cập tới việc dùng **Bổ Tỳ hoàn** để phục hồi lâu dài.
        - Nếu chỉ có các triệu chứng thuộc nhóm **Tỳ Khí Hư** (và không có triệu chứng nào thuộc Vị Khí Hư hay Đại Tràng Hư Hàn), sản phẩm chính cần gợi ý là **Bổ Tỳ hoàn**.
    - Gợi ý tối đa 3 sản phẩm.

8. QUY TẮC ĐỊNH DẠNG NỘI DUNG TRONG JSON:
    - Bắt buộc sử dụng Markdown **để in đậm** TÊN TÌNH TRẠNG (ví dụ: **Thận Dương Hư**) và TÊN SẢN PHẨM (ví dụ: **Viên bổ thận âm**) để tăng tính thẩm mỹ và dễ đọc.
    - 'ketLuan': Sử dụng xuống dòng kép (\\n\\n) để phân tách rõ ràng phần tóm tắt tổng quát và các điểm phân tích chi tiết. Với các điểm phân tích chi tiết, sử dụng gạch đầu dòng (-) cho mỗi điểm.
    - 'phanTichLuoi': **Chỉ tạo key này nếu có ảnh lưỡi được cung cấp.** Định dạng: Mỗi ý, mỗi câu phải xuống dòng. Sử dụng ký tự xuống dòng \\n và dấu gạch đầu dòng (-) cho các ý liệt kê.
    - 'huongHoTro': Phải nêu rõ HƯỚNG điều trị theo Đông y. Cần biện chứng rõ ràng, chi tiết, và dễ hiểu. Sử dụng xuống dòng hợp lý (\\n hoặc \\n\\n) để phân tách các ý lớn.
    - 'goiYSanPham': Định dạng BẮT BUỘC: Danh sách gạch đầu dòng (-), mỗi sản phẩm trên một dòng, in đậm tên sản phẩm, kèm phân tích thành phần, tác dụng. Sử dụng ký tự xuống dòng \\n để phân tách các mục.
    - 'cachDung': Phải tóm tắt ĐẦY ĐỦ CÁCH DÙNG của TỪNG SẢN PHẨM được gợi ý, mỗi sản phẩm trên một dòng riêng biệt, bao gồm liều lượng và thời gian sử dụng ước tính. Sau khi liệt kê xong liều dùng của tất cả các sản phẩm, phải có một dòng phân cách rõ ràng '--- KIÊNG KỴ CHUNG ---' và sau đó là PHẦN KIÊNG KỴ TỔNG HỢP cho TẤT CẢ các sản phẩm được gợi ý (gộp chung các mục kiêng kỵ giống nhau, liệt kê dạng gạch đầu dòng). Sử dụng ký tự xuống dòng \\n để phân tách các câu/ý.
    - 'anUongSinhHoat': Định dạng BẮT BUỘC là một chuỗi (string) duy nhất. Bên trong chuỗi này, mỗi lời khuyên phải được trình bày trên một dòng riêng, bắt đầu bằng một dấu gạch ngang và một dấu cách ('- '). Sử dụng ký tự xuống dòng ('\\n') để phân tách các dòng. Ví dụ: "- Uống đủ nước ấm.\\n- Ngủ trước 11 giờ đêm."

9. LÝ DO KẾT HỢP: Nếu gợi ý từ 2 sản phẩm trở lên, BẮT BUỘC phải tạo thêm một đối tượng JSON với key "lyDoKetHop". Trong đó, giải thích ngắn gọn, súc tích theo góc nhìn Đông y tại sao cần kết hợp các sản phẩm đó để đạt hiệu quả tốt nhất (ví dụ: một sản phẩm trị gốc, một sản phẩm trị ngọn; một sản phẩm bổ tỳ, một sản phẩm bổ thận để tương sinh...). Định dạng bằng các gạch đầu dòng (-).

VÍ DỤ LUỒNG ĐẦU RA:
{"bienChungTrieuChung": ["Đau lưng → Thận chủ cốt tủy, thận hư không nuôi dưỡng được xương cốt gây đau mỏi."]}
{"ketLuan": "Tình trạng chính của bạn là **Thận Dương Hư**..."}
{"huongHoTro": "Cần tập trung vào việc **bổ mệnh môn hỏa**..."}
... và tiếp tục cho các phần còn lại.`;