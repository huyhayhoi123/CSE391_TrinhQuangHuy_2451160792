# PHIẾU BÀI TẬP 05 - CSS RESPONSIVE & SCSS

Họ tên: Trịnh Quang Huy  
Lớp: 66HTTT1

## PHẦN A - KIỂM TRA ĐỌC HIỂU

### Câu A1

Đề bài: Viết thẻ meta viewport chuẩn, giải thích từng thuộc tính. Nếu thiếu thẻ này thì iPhone hiển thị như thế nào? So sánh Mobile-First và Desktop-First.

Bài làm:

Thẻ meta viewport chuẩn:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

`width=device-width` nghĩa là chiều rộng trang web bằng chiều rộng màn hình thiết bị. `initial-scale=1.0` nghĩa là mức zoom ban đầu là 100%.

Nếu thiếu thẻ này, iPhone có thể giả lập chiều rộng trang lớn như desktop, làm chữ nhỏ, bố cục bị thu nhỏ và người dùng phải phóng to để đọc.

Mobile-First là viết CSS mặc định cho mobile trước, sau đó dùng `@media (min-width: ...)` để mở rộng cho tablet, desktop.

```css
.card { width: 100%; }
@media (min-width: 768px) {
    .card { width: 50%; }
}
```

Desktop-First là viết CSS mặc định cho desktop trước, sau đó dùng `@media (max-width: ...)` để thu nhỏ cho mobile.

```css
.card { width: 25%; }
@media (max-width: 767px) {
    .card { width: 100%; }
}
```

Mobile-First được khuyên dùng vì người dùng mobile nhiều, CSS gọn hơn và dễ tối ưu hiệu năng cho màn hình nhỏ.

### Câu A2

Đề bài: Ghi lại các breakpoints chuẩn, thiết bị đại diện và số cột sản phẩm nên hiển thị.

Bài làm:

| Breakpoint | Thiết bị đại diện | Lưới sản phẩm |
|---|---|---|
| < 576px | Điện thoại nhỏ | 1 cột |
| ≥ 576px | Điện thoại lớn | 1-2 cột |
| ≥ 768px | Tablet | 2 cột |
| ≥ 992px | Laptop nhỏ | 3 cột |
| ≥ 1200px | Desktop | 4 cột |
| ≥ 1400px | Màn hình lớn | 4-5 cột |

### Câu A3

Đề bài: Cho CSS media queries, hãy cho biết `.container` có width bao nhiêu ở mỗi kích thước màn hình.

Bài làm:

| Chiều rộng màn hình | `.container` width |
|---|---|
| 375px | 100% |
| 600px | 540px |
| 800px | 720px |
| 1000px | 960px |
| 1400px | 1140px |

Giải thích: CSS dùng `min-width`, nên khi màn hình đạt breakpoint nào thì rule ở breakpoint đó được áp dụng. Nếu nhiều rule cùng đúng thì rule viết sau sẽ thắng.

### Câu A4

Đề bài: Giải thích 4 tính năng chính của SCSS và cho ví dụ. Tại sao trình duyệt không đọc được file `.scss`?

Bài làm:

1. Variables: dùng biến để lưu màu, font, khoảng cách.

```scss
$primary-color: #2563eb;
button { background: $primary-color; }
```

2. Nesting: viết CSS lồng nhau cho dễ đọc.

```scss
.card {
    h3 { color: #111; }
    &:hover { transform: translateY(-4px); }
}
```

3. Mixins: tạo đoạn CSS dùng lại nhiều lần.

```scss
@mixin flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
}
.box { @include flex-center; }
```

4. Extend: kế thừa style từ selector khác.

```scss
.btn { padding: 10px; border-radius: 6px; }
.btn-primary { @extend .btn; background: blue; }
```

Trình duyệt không đọc được `.scss` vì SCSS là cú pháp tiền xử lý, phải biên dịch sang CSS. Lệnh ví dụ:

```bash
sass scss/style.scss scss/style.css
```

## PHẦN B - THỰC HÀNH CODE

### Bài B1

Đề bài: Tạo trang sản phẩm responsive hoàn chỉnh với `responsive.html` và `responsive.css`. Có mobile, tablet, desktop, hamburger trên mobile, sidebar ẩn trên mobile, ít nhất 8 product cards.

Bài làm: Đã làm trong file `responsive.html` và `responsive.css`.

Screenshot cần chụp:

- `screenshots/B1_mobile_375.png`
- `screenshots/B1_tablet_768.png`
- `screenshots/B1_desktop_1200.png`

### Bài B2

Đề bài: Tạo `animations.html` và `animations.css`, có 5 hiệu ứng: card hover, button hover, image zoom, loading spinner, fade-in.

Bài làm: Đã làm trong file `animations.html` và `animations.css`.

### Bài B3

Đề bài: Tạo `style.scss`, dùng variables, nesting, mixins, partials, sau đó compile SCSS thành CSS.

Bài làm: Đã làm trong thư mục `scss/`.

Cấu trúc file:

```text
scss/
├── _variables.scss
├── _mixins.scss
├── _components.scss
├── style.scss
└── style.css
```

Lệnh compile:

```bash
sass scss/style.scss scss/style.css
```

## PHẦN C - PHÂN TÍCH

### Câu C1

Đề bài: Chọn một trang web nổi tiếng, mở ở 3 kích thước mobile, tablet, desktop và phân tích responsive.

Bài làm:

Trang chọn: YouTube.

Ở mobile 375px, giao diện YouTube thu gọn nhiều phần. Navigation chuyển thành dạng biểu tượng, sidebar lớn bị ẩn, nội dung hiển thị 1 cột. Một số chữ và mô tả phụ bị rút gọn để tiết kiệm diện tích.

Ở tablet 768px, nội dung rộng hơn, danh sách video có thể hiển thị nhiều hơn. Sidebar có thể xuất hiện dạng thu nhỏ bằng icon, phần video vẫn ưu tiên chiều rộng chính.

Ở desktop 1440px, sidebar hiện đầy đủ hơn, lưới nội dung nhiều cột hơn, thanh tìm kiếm rộng hơn và có nhiều khoảng trống để hiển thị thông tin.

Navigation thay đổi từ gọn trên mobile sang đầy đủ hơn trên desktop. Lưới content thay đổi từ 1 cột sang nhiều cột. Một số phần như sidebar, mô tả, chữ phụ có thể bị ẩn hoặc rút gọn trên mobile.

Screenshot cần chụp:

- `screenshots/C1_youtube_mobile.png`
- `screenshots/C1_youtube_tablet.png`
- `screenshots/C1_youtube_desktop.png`
- `screenshots/C1_media_query_1.png`
- `screenshots/C1_media_query_2.png`

### Câu C2

Đề bài: Thiết kế responsive strategy cho trang đặt bàn nhà hàng. Vẽ wireframe mobile, tablet, desktop và viết CSS skeleton.

Bài làm:

Mobile:

```text
HEADER
HERO IMAGE
FORM ĐẶT BÀN
GRID ẢNH 1 CỘT
MAP
FOOTER
```

Mobile nên ẩn bớt menu dài, chỉ hiện logo và nút menu. Form đặt bàn nằm ngay sau hero để người dùng dễ thao tác.

Tablet:

```text
HEADER
HERO IMAGE
FORM ĐẶT BÀN
GRID ẢNH 2 CỘT
MAP
FOOTER
```

Tablet có thể hiển thị grid ảnh 2 cột, bản đồ nằm dưới form.

Desktop:

```text
HEADER
HERO IMAGE
MAIN 2 CỘT: FORM + MAP
GRID ẢNH 3 CỘT
FOOTER
```

Desktop dùng layout 2 cột cho form và bản đồ, grid ảnh 3 cột.

CSS skeleton:

```css
.restaurant-page {
    display: grid;
    gap: 16px;
}

.food-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
}

.booking-area {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
}

@media (min-width: 768px) {
    .food-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 1024px) {
    .food-grid {
        grid-template-columns: repeat(3, 1fr);
    }

    .booking-area {
        grid-template-columns: 1fr 1fr;
    }
}
```

## PHẦN D - VIDEO THỰC HÀNH OBS

Đề bài: Quay video code-along Responsive Product Grid Mobile-First.

Bài làm: Code mẫu đã tạo trong file `video_responsive.html` và `video_responsive.css`. Video sẽ đặt trong thư mục `videos/` với tên `PBT05_TrinhQuangHuy_MaSV.mp4` hoặc dán link video vào đây.
