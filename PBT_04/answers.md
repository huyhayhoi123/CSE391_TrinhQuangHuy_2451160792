# PHIẾU BÀI TẬP 04 - CSS LAYOUT

Họ tên: Trịnh Quang Huy  
Lớp: 66HTTT1

## PHẦN A - KIỂM TRA ĐỌC HIỂU

### Câu A1

Đề bài: Điền bảng 5 loại positioning trong CSS và giải thích absolute tham chiếu body khi nào, parent khi nào.

Bài làm:

Nguồn: 12_css_positioning.md, phần CSS Positioning.

| Position | Vẫn chiếm chỗ trong flow? | Tham chiếu vị trí | Cuộn theo trang? | Use case |
|---|---|---|---|---|
| static | Có | Theo flow bình thường của trang | Có | Dùng cho phần tử bình thường, không cần đặt vị trí |
| relative | Có | Vị trí ban đầu của chính nó | Có | Dịch nhẹ phần tử nhưng vẫn giữ chỗ cũ |
| absolute | Không | Ancestor gần nhất có position khác static | Có, nếu không nằm trong fixed | Badge, menu con, tooltip |
| fixed | Không | Viewport của trình duyệt | Không, luôn cố định | Header cố định, nút lên đầu trang |
| sticky | Có | Vị trí ban đầu, sau đó dính theo viewport khi đạt top | Một phần, đến giới hạn parent | Sidebar dính khi cuộn |

absolute sẽ tham chiếu body khi không có phần tử cha nào được đặt position khác static. Nếu parent hoặc ancestor gần nhất có position: relative, absolute, fixed hoặc sticky thì absolute sẽ tham chiếu theo phần tử đó. Phần tử này gọi là nearest positioned ancestor.

### Câu A2

Đề bài: Dự đoán layout Flexbox và Grid cho 5 trường hợp.

Bài làm:

Trường hợp 1:

```css
.container { display: flex; }
.item { flex: 1; }
```

Có 4 items thì 4 items nằm trên 1 hàng, chia đều chiều rộng.

```text
| item 1 | item 2 | item 3 | item 4 |
```

Trường hợp 2:

```css
.container { display: flex; flex-wrap: wrap; }
.item { width: 45%; margin: 2.5%; }
```

Mỗi item chiếm 45% width và có margin hai bên 2.5%, tổng khoảng 50%. Có 6 items nên thành 3 hàng, mỗi hàng 2 cột.

```text
| item 1 | item 2 |
| item 3 | item 4 |
| item 5 | item 6 |
```

Trường hợp 3:

```css
.container { display: flex; justify-content: space-between; align-items: center; }
```

Có 3 items thì item đầu nằm sát trái, item giữa nằm giữa, item cuối nằm sát phải. align-items: center làm các item căn giữa theo chiều dọc.

```text
| item 1        item 2        item 3 |
```

Trường hợp 4:

```css
.container { display: grid; grid-template-columns: 200px 1fr 200px; gap: 20px; }
```

Có 3 items thì chia thành 3 cột: cột trái 200px, cột giữa chiếm phần còn lại, cột phải 200px, giữa các cột có gap 20px.

```text
| 200px |     1fr     | 200px |
```

Trường hợp 5:

```css
.container { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
```

Có 7 items thì thành 3 cột. Hàng 1 có item 1, 2, 3. Hàng 2 có item 4, 5, 6. Hàng 3 có item 7 nằm ở cột đầu tiên.

```text
| item 1 | item 2 | item 3 |
| item 4 | item 5 | item 6 |
| item 7 |        |        |
```

## PHẦN B - THỰC HÀNH CODE

### Bài B1

Đề bài: Tạo file positioning.html và positioning.css. Trang có fixed header, sticky sidebar, badge HOT absolute trên card và nút scroll to top fixed.

Bài làm: Đã làm trong file positioning.html và positioning.css.

### Bài B2

Đề bài: Tạo file flexbox_layout.html và flexbox.css. Trang có navbar ngang dùng Flexbox và lưới product cards dùng Flexbox.

Bài làm: Đã làm trong file flexbox_layout.html và flexbox.css.

### Bài B3

Đề bài: Tạo file grid_layout.html và grid.css. Xây dựng layout trang chủ E-Commerce dùng CSS Grid.

Bài làm: Đã làm trong file grid_layout.html và grid.css.

## PHẦN C - SUY LUẬN

### Câu C1

Đề bài: Với 5 tình huống layout thực tế, chọn dùng Flexbox, Grid hay kết hợp cả hai và giải thích.

Bài làm:

1. Navigation bar ngang: dùng Flexbox, vì các phần tử nằm trên một hàng và cần căn trái, giữa, phải.

2. Lưới ảnh Instagram 3 cột đều nhau: dùng Grid, vì đây là layout hai chiều theo hàng và cột.

3. Layout blog main content + sidebar: dùng Grid hoặc kết hợp. Grid phù hợp để chia cột chính và sidebar rõ ràng.

4. Footer với 4 cột thông tin: dùng Grid, vì footer có nhiều cột đều nhau và dễ chỉnh khoảng cách.

5. Card sản phẩm ảnh trên, text giữa, nút dưới: dùng Flexbox trong từng card, vì cần xếp nội dung theo chiều dọc và cho nút dính đáy bằng margin-top: auto.

### Câu C2

Đề bài: Debug 3 lỗi Flexbox: card không đều chiều cao, hero không căn giữa, sidebar bị co lại.

Bài làm:

Lỗi 1: Cards không đều chiều cao, nút Mua bị nhảy lên xuống.

Nguyên nhân: Nội dung mỗi card dài ngắn khác nhau, card chưa dùng flex theo chiều dọc nên nút không dính đáy.

Code sửa:

```css
.card-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.card {
    width: calc(33.333% - 20px);
    display: flex;
    flex-direction: column;
}

.card .btn {
    margin-top: auto;
    padding: 10px;
}
```

Lỗi 2: Muốn item nằm giữa cả ngang và dọc trong container 100vh nhưng item vẫn dính góc trái trên.

Nguyên nhân: Chỉ khai báo display: flex nhưng chưa dùng justify-content và align-items.

Code sửa:

```css
.hero {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.hero-content {
    text-align: center;
}
```

Lỗi 3: Sidebar bị co lại khi content quá dài.

Nguyên nhân: Trong flex layout, item có thể bị co nếu không khóa flex-shrink.

Code sửa:

```css
.layout {
    display: flex;
}

.sidebar {
    width: 250px;
    flex-shrink: 0;
}

.content {
    flex: 1;
}
```

## PHẦN D - VIDEO THỰC HÀNH OBS

Đề bài: Quay video code-along tạo navbar ngang và product cards bằng Flexbox.

Bài làm: Code mẫu để quay video đã làm trong file video_flexbox.html và video_flexbox.css. Video sẽ đặt trong thư mục videos với tên PBT04_TrinhQuangHuy_MaSV.mp4 hoặc dán link video vào đây.
