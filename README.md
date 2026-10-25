# tomoe-printables

Học liệu in & chơi cho Tiểu học TOMOE, đăng bằng GitHub Pages.

Trang mục lục: `index.html` (tìm kiếm không dấu, lọc theo môn). Danh mục nằm trong `pages.js`.

## Thêm một trang mới
1. Tạo thư mục mới, ví dụ `bang-cuu-chuong/`, đặt file trang vào đó với tên `index.html`.
2. Trước `</body>` của trang, thêm dòng `<script src="../assets/back.js"></script>` để có nút “← Mục lục”.
3. Mở `pages.js`, thêm một mục: `path`, `title`, `desc`, `subject`, `tags`, `icon`, `updated`.

## Bật GitHub Pages
Settings → Pages → Source: “Deploy from a branch” → Branch `main`, thư mục `/ (root)` → Save.
Sau 1–2 phút trang có ở `https://ptung90.github.io/tomoe-printables/`.
