// Danh mục các trang. Thêm trang mới: tạo thư mục <ten-trang>/index.html rồi thêm 1 mục vào đây.
// Các trường: path (thư mục), title, desc, subject (môn), tags (từ khoá để tìm), icon (1 emoji), updated (YYYY-MM-DD)
window.PAGES = [
  {
    path: "dien-so-vao-hinh/",
    title: "Điền số vào các hình",
    desc: "Phiếu toán tư duy: chuỗi phép cộng, trừ cho sẵn một số, trẻ điền các hình còn lại. Chọn phạm vi 10–100, 3–5 phép tính, 6–24 bài; bấm “Xáo đề” để có bộ mới, kèm đáp án.",
    subject: "Toán",
    tags: ["phép cộng", "phép trừ", "toán tư duy", "lớp 1", "phiếu bài tập", "xáo đề", "đáp án"],
    icon: "🔺",
    updated: "2026-10-30"
  },
  {
    path: "so-sanh-phan-so/",
    title: "So sánh phân số",
    desc: "Phiếu điền dấu >, <, = giữa hai phân số, 20 câu mỗi phiếu: cùng mẫu số, khác mẫu số (mẫu là bội hoặc bất kỳ), trộn. Chọn mẫu số tối đa và số phiếu; xáo đề, kèm đáp án.",
    subject: "Toán",
    tags: ["phân số", "so sánh", "mẫu số", "level 2", "phiếu bài tập", "xáo đề", "đáp án"],
    icon: "➗",
    updated: "2026-10-30"
  },
  {
    path: "khung-hat-thap/",
    title: "Khung hạt thấp – cộng, trừ đến hàng ngàn",
    desc: "Ba cấp độ: không nhớ, có nhớ một lần, có nhớ nhiều lần. Có khung hạt để đọc số và tô màu, phép tính đặt theo cột màu, toán đố; đáp án ghi cả số lần đổi hàng.",
    subject: "Toán",
    tags: ["khung hạt", "small bead frame", "cộng có nhớ", "trừ có nhớ", "hàng ngàn", "toán đố", "xáo đề"],
    icon: "🧮",
    updated: "2026-10-30"
  },
  {
    path: "phieu-xem-lich/",
    title: "Phiếu xem lịch",
    desc: "Bốn phiếu: hôm nay của em, các ngày trong tuần, hai phiếu đọc tờ lịch tháng. Chọn tháng, năm: tờ lịch, ngày lễ, câu hỏi và đáp án tự đổi theo.",
    subject: "Lịch sử",
    tags: ["lịch", "ngày trong tuần", "tháng", "thời gian", "phiếu bài tập", "xáo đề", "đáp án"],
    icon: "📅",
    updated: "2026-10-30"
  },
  {
    path: "phieu-xem-dong-ho/",
    title: "Phiếu xem đồng hồ",
    desc: "Đọc giờ đúng, giờ rưỡi, vẽ kim, một ngày của em; thêm phiếu 15 – 45 phút hoặc phút chẵn 5. Bấm “Xáo đề” để đổi giờ trên mọi đồng hồ, kèm đáp án.",
    subject: "Lịch sử",
    tags: ["đồng hồ", "xem giờ", "giờ rưỡi", "thời gian", "phiếu bài tập", "xáo đề", "đáp án"],
    icon: "🕒",
    updated: "2026-10-30"
  },
  {
    path: "tim-so/",
    title: "Tìm số tiếng Anh",
    desc: "Poster trò chơi tìm số: chữ số tiếng Anh xếp ngẫu nhiên, từ 1–10 đến 1–100. Chọn khổ A5/A4, ngang/dọc, font chữ, màu; in trực tiếp.",
    subject: "Tiếng Anh",
    tags: ["số đếm", "numbers", "poster", "in", "trò chơi", "A5", "A4"],
    icon: "🔢",
    updated: "2026-10-25"
  },
  {
    path: "tam-giac-kien-tao/",
    title: "Tam giác kiến tạo xanh – 60 mẫu ghép",
    desc: "60 mẫu ghép từ tam giác vuông xanh (4 đến 12 miếng), 6 mẫu mỗi trang, 10 trang A4 ngang. Xem “Vừa khung” hoặc “Cùng cỡ tam giác”; in trực tiếp hoặc lưu PDF.",
    subject: "Toán",
    tags: ["hình học", "tam giác vuông", "ghép hình", "tam giác kiến tạo", "thẻ mẫu", "A4"],
    icon: "📐",
    updated: "2026-10-23"
  },
  {
    path: "dien-tich-hinh-tron/",
    title: "Diện tích hình tròn – mẫu cắt ghép",
    desc: "2 tờ cắt in trên giấy màu (hình tròn r = 5 cm chia 8/10/12/16 hình quạt, dải 15,7 × 5 cm có mép dán) và 1 tờ hướng dẫn 9 bước để trẻ tự ghép thành hình chữ nhật, tìm ra S = π × r². In từng tờ, tỉ lệ 100%.",
    subject: "Toán",
    tags: ["hình tròn", "diện tích", "số pi", "hình quạt", "cắt ghép", "giấy màu", "hướng dẫn", "A4"],
    icon: "🍕",
    updated: "2026-10-26"
  },
  {
    path: "so-do-phan-loai-thuc-vat/",
    title: "Sơ đồ phân loại thực vật",
    desc: "Poster A2 ngang: thực vật không hạt (rêu, rêu tản, rêu sừng, thông đất, dương xỉ) và có hạt (4 ngành hạt trần; hạt kín một lá mầm, hai lá mầm). 61 hình có tên Việt – Anh.",
    subject: "Sinh học",
    tags: ["poster", "sơ đồ", "phân loại", "thực vật", "rêu", "dương xỉ", "hạt trần", "hạt kín", "A2"],
    icon: "🌿",
    updated: "2026-10-21"
  },
  {
    path: "so-do-phan-loai-dong-vat/",
    title: "Sơ đồ phân loại động vật",
    desc: "Poster A2 ngang: động vật không xương sống (8 ngành, Chân khớp chia 4 lớp) và có xương sống (6 lớp: cá sụn, cá xương, lưỡng cư, bò sát, chim, thú). 129 hình có tên Việt – Anh.",
    subject: "Sinh học",
    tags: ["poster", "sơ đồ", "phân loại", "động vật", "không xương sống", "có xương sống", "A2"],
    icon: "🦎",
    updated: "2026-10-20"
  },
  {
    path: "dong-vat-khong-xuong-song/",
    title: "Thẻ Động vật không xương sống",
    desc: "8 nhóm lớn, 11 thẻ: thẻ tên, thẻ đặc điểm, thẻ kiểm soát. Có sơ đồ phân loại, bảng so sánh và phần ôn tập trắc nghiệm.",
    subject: "Sinh học",
    tags: ["thẻ", "phân loại", "động vật", "chân khớp", "côn trùng", "ôn tập", "quiz"],
    icon: "🐌",
    updated: "2026-09-08"
  }
];
