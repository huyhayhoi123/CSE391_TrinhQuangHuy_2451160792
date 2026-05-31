# PHIẾU BÀI TẬP 06 - CSS FRAMEWORKS

Họ tên: Trịnh Quang Huy  
Lớp: 66HTTT1  
Track chọn: Bootstrap 5

## PHẦN A - ĐỌC HIỂU

### Câu A1

Đề bài: Đọc tài liệu Grid System. Không chạy code, vẽ layout cho đoạn HTML Bootstrap ở 3 kích thước và giải thích `col-md-6`.

Bài làm:

Đoạn code có 4 box, mỗi box có class `col-12 col-md-6 col-lg-3`.

Ở màn hình nhỏ hơn 768px, class `col-12` hoạt động nên mỗi box chiếm 12/12 cột. Vì vậy 4 box xếp thành 4 hàng, mỗi hàng 1 box.

```text
Box 1
Box 2
Box 3
Box 4
```

Ở màn hình từ 768px đến 991px, class `col-md-6` hoạt động nên mỗi box chiếm 6/12 cột. Vì vậy mỗi hàng có 2 box.

```text
Box 1 | Box 2
Box 3 | Box 4
```

Ở màn hình từ 992px trở lên, class `col-lg-3` hoạt động nên mỗi box chiếm 3/12 cột. Vì vậy một hàng có 4 box.

```text
Box 1 | Box 2 | Box 3 | Box 4
```

`col-md-6` nghĩa là từ breakpoint `md` trở lên, phần tử chiếm 6 trong 12 cột, tức là bằng một nửa hàng. Không cần viết `col-sm-12` vì `col-12` đã áp dụng mặc định cho màn hình nhỏ trước rồi.

### Câu A2

Đề bài: Giải thích Bootstrap utilities và components: `d-none d-md-block`, spacing utilities, `.container`, `.container-fluid`, `.container-md`.

Bài làm:

`d-none d-md-block` nghĩa là phần tử bị ẩn mặc định ở màn hình nhỏ, nhưng từ breakpoint `md` trở lên thì hiển thị dạng block.

5 spacing utilities:

1. `mt-3`: thêm margin-top mức 3.
2. `mb-4`: thêm margin-bottom mức 4.
3. `ms-2`: thêm margin bên trái theo hướng start mức 2.
4. `me-2`: thêm margin bên phải theo hướng end mức 2.
5. `px-4`: thêm padding trái và phải mức 4.

Sự khác nhau:

- `.container`: có chiều rộng tối đa thay đổi theo breakpoint và tự căn giữa.
- `.container-fluid`: luôn rộng 100% màn hình.
- `.container-md`: dưới breakpoint `md` thì rộng 100%, từ `md` trở lên thì giống container có max-width.

## PHẦN B - THỰC HÀNH

### Bài B1

Đề bài: Tạo `bootstrap_landing.html`, landing page E-Commerce dùng Bootstrap 5, có navbar, carousel, product grid, card, badge, modal, footer và responsive.

Bài làm: Đã làm trong file `bootstrap_landing.html`.

### Bài B2

Đề bài: Tạo `bootstrap_dashboard.html`, trang admin dashboard có sidebar, topbar, stat cards, table, form filter, accordion và alert.

Bài làm: Đã làm trong file `bootstrap_dashboard.html`.

## PHẦN C - PHÂN TÍCH

### Câu C1

Đề bài: Muốn đổi màu `$primary` của Bootstrap sang `#E63946`, giải thích quy trình. Tại sao không nên override trực tiếp `.btn-primary`?

Bài làm:

Để đổi màu `$primary`, cách đúng là dùng Sass của Bootstrap. Ta tạo file SCSS riêng, khai báo biến trước khi import Bootstrap:

```scss
$primary: #E63946;
@import "bootstrap/scss/bootstrap";
```

Sau đó dùng công cụ như Sass hoặc npm để biên dịch SCSS thành CSS rồi nhúng CSS đã biên dịch vào HTML.

Không nên override trực tiếp `.btn-primary { background: red; }` vì cách này chỉ sửa một phần nhỏ và dễ thiếu các trạng thái khác như hover, active, disabled, border, focus. Dùng Sass variables giúp toàn bộ hệ thống màu của Bootstrap thay đổi đồng bộ hơn, code sạch hơn và dễ bảo trì hơn.

### Câu C2

Đề bài: So sánh CSS thuần với Bootstrap khi tạo navbar responsive và product card.

Bài làm:

Nếu viết CSS thuần, ta phải tự viết nhiều dòng CSS cho navbar, responsive menu, grid, card, hover và spacing. Thời gian phát triển lâu hơn nhưng tùy biến cao hơn.

Với Bootstrap, ta dùng sẵn các class như `navbar`, `container`, `row`, `col`, `card`, `btn`, `badge`, `modal`. Số dòng CSS gần như không cần viết, thời gian làm nhanh hơn và giao diện dễ đồng bộ.

Bootstrap nên dùng khi cần làm nhanh dashboard, landing page, prototype hoặc bài thực hành framework. Không nên dùng Bootstrap khi dự án cần giao diện quá riêng, muốn tối ưu dung lượng cực nhỏ, hoặc team muốn kiểm soát toàn bộ CSS từ đầu.

Ví dụ CSS thuần cho navbar và card:

```css
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
}
.card {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px;
}
@media (max-width: 768px) {
    .navbar {
        flex-direction: column;
    }
}
```

Với Bootstrap thì có thể dùng trực tiếp `navbar navbar-expand-lg`, `row`, `col-md-6`, `col-lg-3`, `card`, `btn btn-primary`.

## PHẦN D - VIDEO THỰC HÀNH OBS

Đề bài: Track Bootstrap, quay video code-along Product Card + Modal.

Bài làm: Code mẫu đã làm trong file `video_bootstrap_card.html`. Video sẽ đặt trong thư mục `videos` với tên `PBT06_TrinhQuangHuy_MaSV.mp4` hoặc dán link video vào đây.
