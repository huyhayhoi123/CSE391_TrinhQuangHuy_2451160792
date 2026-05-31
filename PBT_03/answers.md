# PHIẾU BÀI TẬP 03 - CSS CORE

Họ tên: Trịnh Quang Huy  
Lớp: 66HTTT1

## PHẦN A - KIỂM TRA ĐỌC HIỂU

### Câu A1

Đề bài: Liệt kê 3 cách nhúng CSS vào HTML. Mỗi cách viết ví dụ code, ưu điểm, nhược điểm và khi nào nên dùng. Nếu cùng một element có cả 3 cách CSS thì cách nào thắng?

Bài làm:

Nguồn: 08_introduction_css.md, phần cách nhúng CSS.

1. Inline CSS

Ví dụ:

```html
<p style="color: red;">Xin chào</p>
```

Ưu điểm: Viết nhanh, tác động trực tiếp vào một phần tử.

Nhược điểm: Khó bảo trì, làm HTML rối, không tái sử dụng được.

Khi dùng: Dùng để test nhanh hoặc chỉnh một phần tử rất nhỏ.

2. Internal CSS

Ví dụ:

```html
<style>
    p {
        color: blue;
    }
</style>
```

Ưu điểm: Viết CSS ngay trong file HTML, dễ thử nghiệm với trang nhỏ.

Nhược điểm: Nếu nhiều trang thì bị lặp code, khó quản lý.

Khi dùng: Dùng cho bài demo nhỏ hoặc một trang đơn giản.

3. External CSS

Ví dụ:

```html
<link rel="stylesheet" href="style.css">
```

Ưu điểm: Tách riêng HTML và CSS, dễ bảo trì, dùng lại được cho nhiều trang.

Nhược điểm: Cần thêm file CSS và trình duyệt phải tải thêm file.

Khi dùng: Nên dùng cho website thật hoặc bài có nhiều trang.

Nếu cùng một element có cả 3 cách CSS thì inline CSS thường thắng vì có độ ưu tiên cao hơn internal và external CSS. Tuy nhiên, nếu rule khác có `!important` thì kết quả có thể thay đổi.

### Câu A2

Đề bài: Cho đoạn HTML, không chạy code hãy cho biết các selector chọn được element nào. Sau đó tạo file `selectors_test.html` để kiểm chứng.

Bài làm:

Nguồn: 09_css_selectors.md, phần CSS selectors.

1. `h1` → Chọn `ShopTLU`.

2. `.price` → Chọn `25.990.000đ` và `45.990.000đ`.

3. `#app header` → Chọn thẻ `header` có class `top-bar dark`.

4. `nav a:first-child` → Chọn link `Home`.

5. `.product.featured h2` → Chọn `MacBook Pro`.

6. `article > p` → Chọn các thẻ p là con trực tiếp của article: `25.990.000đ`, `Mô tả sản phẩm...`, `45.990.000đ`, `Mô tả sản phẩm...`.

7. `a[href="/"]` → Chọn link `Home`.

8. `.top-bar.dark h1` → Chọn `ShopTLU`.

Bài kiểm chứng đã làm trong file `selectors_test.html`.

### Câu A3

Đề bài: Tính chiều rộng thực tế của các box trong Box Model.

Bài làm:

Nguồn: 11_box_model.md, phần Box Model.

Trường hợp 1: content-box mặc định

```css
.box-1 {
    width: 400px;
    padding: 20px;
    border: 5px solid black;
    margin: 10px;
}
```

Chiều rộng hiển thị = 400 + 20 + 20 + 5 + 5 = 450px.

Không gian chiếm trên trang = 450 + 10 + 10 = 470px.

Trường hợp 2: border-box

```css
.box-2 {
    box-sizing: border-box;
    width: 400px;
    padding: 20px;
    border: 5px solid black;
    margin: 10px;
}
```

Chiều rộng hiển thị = 400px.

Kích thước content thực tế = 400 - 20 - 20 - 5 - 5 = 350px.

Không gian chiếm trên trang = 400 + 10 + 10 = 420px.

Trường hợp 3: Margin collapse

```css
.box-a { margin-bottom: 25px; }
.box-b { margin-top: 40px; }
```

Khoảng cách giữa hai box = 40px.

Giải thích: Margin dọc của hai block liền kề bị collapse nên không cộng 25px + 40px. Trình duyệt lấy margin lớn hơn là 40px.

Nâng cao:

Nếu `.box-a` có `margin-bottom: -10px` và `.box-b` có `margin-top: 40px` thì khoảng cách = 40 + (-10) = 30px.

### Câu A4

Đề bài: Tính specificity cho các CSS rules cùng target một element `<p class="price" id="main-price">`.

Bài làm:

Nguồn: 10_cascade_specificity.md, phần Specificity.

Rule A: `p { color: black; }` → Specificity `(0,0,1)`.

Rule B: `.price { color: blue; }` → Specificity `(0,1,0)`.

Rule C: `#main-price { color: red; }` → Specificity `(1,0,0)`.

Rule D: `p.price { color: green; }` → Specificity `(0,1,1)`.

Element sẽ có màu đỏ vì selector id `#main-price` có specificity cao nhất.

Nếu thêm inline style:

```html
<p class="price" id="main-price" style="color: orange;">
```

Element sẽ có màu cam vì inline style ưu tiên cao hơn CSS selector bình thường.

Nếu Rule A thêm `!important`:

```css
p { color: black !important; }
```

Element sẽ có màu đen vì `!important` được ưu tiên hơn các rule thường, dù selector `p` có specificity thấp.

## PHẦN B - THỰC HÀNH CODE

### Bài B1

Đề bài: Lấy `profile.html` từ PBT_01 hoặc tạo mới. Tạo `style.css` external, style body, header, navigation, table, footer và dùng ít nhất 5 loại selector.

Bài làm: Đã làm trong file `profile.html` và `style.css`.

Các loại selector đã dùng:

1. Element selector: `body`, `header`, `table`.
2. Class selector: `.active`, `.profile-card`.
3. ID selector: `#ky-nang`.
4. Descendant selector: `header nav a`.
5. Pseudo-class selector: `a:hover`, `tr:nth-child(even)`, `tr:hover`.

### Bài B2

Đề bài: Tạo `boxmodel_lab.html` và `boxmodel.css` để chứng minh content-box, border-box và layout 3 cột.

Bài làm: Đã làm trong file `boxmodel_lab.html` và `boxmodel.css`.

Hộp 1 content-box: chiều rộng thực tế = 300 + 20 + 20 + 5 + 5 = 350px.

Hộp 2 border-box: chiều rộng thực tế = 300px.

Giải thích: Với content-box, width chỉ tính phần content nên padding và border cộng thêm ra ngoài. Với border-box, width đã bao gồm content, padding và border.

Layout 3 cột nếu không dùng border-box sẽ bị vượt quá 1000px vì padding và border được cộng thêm vào width. Khi dùng border-box, tổng chiều rộng 250px + 500px + 250px = 1000px nên không bị vỡ layout.

### Bài B3

Đề bài: Tạo `specificity.html` và `specificity.css`, viết 10 CSS rules cùng target phần tử `<p id="demo" class="text highlight">Hello World</p>` từ thấp đến cao theo specificity.

Bài làm: Đã làm trong file `specificity.html` và `specificity.css`.

10 rules và specificity:

1. `p` → `(0,0,1)`.
2. `.text` → `(0,1,0)`.
3. `.highlight` → `(0,1,0)`.
4. `p.text` → `(0,1,1)`.
5. `.box .text` → `(0,2,0)`.
6. `section .highlight` → `(0,1,1)`.
7. `main section .text` → `(0,1,2)`.
8. `#demo` → `(1,0,0)`.
9. `p#demo.text` → `(1,1,1)`.
10. `body main section .box p#demo.text.highlight` → `(1,3,4)`.

Element cuối cùng hiển thị màu tím vì rule số 10 có specificity cao nhất.

Nếu thay đổi thứ tự các rule mà rule số 10 vẫn có specificity cao nhất thì kết quả không đổi. Thứ tự chỉ quyết định khi các selector có cùng specificity.

## PHẦN C - DEBUG VÀ SUY LUẬN

### Câu C1

Đề bài: Layout container 960px bị vỡ. Sidebar và content phải nằm cạnh nhau nhưng content bị đẩy xuống dòng mới. Tính kích thước thực tế, giải thích và đưa ra 2 cách sửa.

Bài làm:

Sidebar:

Width thực tế = 300 + 20 + 20 + 1 + 1 = 342px.

Content:

Width thực tế = 660 + 30 + 30 + 1 + 1 = 722px.

Tổng = 342 + 722 = 1064px.

Container chỉ rộng 960px nên content bị đẩy xuống dòng mới.

Cách sửa 1: Dùng `box-sizing: border-box;` để width đã bao gồm padding và border. Khi đó sidebar 300px và content 660px, tổng đúng 960px.

Cách sửa 2: Không dùng border-box thì phải giảm width content. Sidebar thực tế 342px, container 960px nên content thực tế còn lại là 618px. Vì content có padding 30px hai bên và border 1px hai bên nên width content nên là 618 - 60 - 2 = 556px.

Bài kiểm chứng đã làm trong file `debug_layout.html` và `debug_layout.css`.

### Câu C2

Đề bài: Dự đoán font-size và color theo cascade và inheritance.

Bài làm:

1. `Sản phẩm A` là h2 có `font-size = 20px` vì rule `.card .title { font-size: 20px; }` áp dụng. Màu là green vì class `.highlight` có `color: green !important`, mạnh hơn `#featured .title { color: red; }`.

2. `Mô tả sản phẩm` là p trong card featured có màu blue. Vì `.card { color: blue; }` đặt màu cho card, sau đó `.card p { color: inherit; }` làm p kế thừa màu từ card.

3. `Sản phẩm B` là h2 có `font-size = 20px` vì rule `.card .title` áp dụng. Màu là blue vì h2 nằm trong `.card` nên kế thừa color blue từ card.

4. `Mô tả sản phẩm B` là `p.highlight` có màu green vì `.highlight { color: green !important; }` được ưu tiên.

Bài kiểm chứng đã làm trong file `cascade_puzzle.html`.

## PHẦN D - VIDEO THỰC HÀNH OBS

Đề bài: Quay video code-along chứng minh content-box và border-box.

Bài làm: Code mẫu đã tạo trong file `video_boxmodel.html`. Video sẽ đặt trong thư mục `videos` với tên `PBT03_TrinhQuangHuy_MaSV.mp4` hoặc dán link video vào đây.
