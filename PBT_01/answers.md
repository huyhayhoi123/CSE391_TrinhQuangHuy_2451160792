# PHIẾU BÀI TẬP 01 - HTML5 FUNDAMENTALS

Họ tên: Trịnh Quang Huy   
Lớp: 66HTTT1

## PHẦN A - KIỂM TRA ĐỌC HIỂU

### Câu A1

Đề bài: Khi gõ https://shopee.vn vào trình duyệt và nhấn Enter, hãy liệt kê các bước xảy ra. Tab Network trong Chrome DevTools cho thấy thông tin gì?

Bài làm:

Nguồn: 01_introduction_html_universe.md, phần HTTP, Browser, Client/Server, DNS, Rendering.

Khi gõ https://shopee.vn và nhấn Enter, các bước xảy ra là:

1. Trình duyệt nhận địa chỉ website người dùng nhập vào.
2. Trình duyệt dùng DNS để tìm địa chỉ IP của tên miền shopee.vn.
3. Trình duyệt tạo kết nối đến server qua địa chỉ IP vừa tìm được.
4. Vì trang dùng HTTPS nên trình duyệt và server thực hiện quá trình mã hóa kết nối.
5. Trình duyệt gửi HTTP request đến server để xin nội dung trang web.
6. Server xử lý và gửi HTTP response về cho trình duyệt.
7. Trình duyệt đọc HTML, tải thêm CSS, JavaScript, hình ảnh.
8. Trình duyệt tạo DOM, CSSOM, render tree rồi hiển thị trang web lên màn hình.

Tab Network trong Chrome DevTools cho biết các request khi tải trang, ví dụ tên file, status code, loại file, dung lượng, thời gian tải và tổng thời gian load trang.

Screenshot: screenshots/A1_network.png

### Câu A2

Đề bài: Trang web dùng nhiều thẻ div bị Google đánh giá SEO thấp. Hãy liệt kê ít nhất 4 lỗi semantic và sửa lại.

Bài làm:

Nguồn: 04_semantic_html.md, phần Semantic HTML.

Trang bị đánh giá SEO thấp vì dùng nhiều thẻ div không thể hiện rõ ý nghĩa nội dung. Google và trình đọc màn hình khó hiểu đâu là header, menu, nội dung chính, sản phẩm và footer.

Các lỗi semantic:

1. Dùng div class="header" thay vì thẻ header.
2. Dùng div class="menu" thay vì thẻ nav.
3. Dùng div class="main" thay vì thẻ main.
4. Dùng div class="product" thay vì thẻ article.
5. Tên sản phẩm dùng div class="title" thay vì h2.
6. Ảnh sản phẩm thiếu thuộc tính alt.
7. Dùng div class="footer" thay vì thẻ footer.

Bản sửa:

```html
<header>
    <h1>ShopTLU</h1>
    <nav>
        <a href="/">Trang chủ</a>
        <a href="/products">Sản phẩm</a>
    </nav>
</header>

<main>
    <article>
        <h2>iPhone 16 Pro</h2>
        <p><strong>25.990.000đ</strong></p>
        <figure>
            <img src="iphone.jpg" alt="iPhone 16 Pro">
            <figcaption>Hình ảnh iPhone 16 Pro</figcaption>
        </figure>
    </article>
</main>

<footer>
    <p>&copy; 2026 ShopTLU</p>
</footer>
```

### Câu A3

Đề bài: Không chạy code, hãy vẽ tay hoặc mô tả bằng text art kết quả hiển thị của đoạn HTML. Giải thích tại sao.

Bài làm:

Nguồn: 03_text_formatting.md, phần Block và Inline.

Kết quả hiển thị:

```text
Hộp 1
Text A Text B
Hộp 2
Text C Text D
Hộp 3
```

Giải thích: Thẻ div là thẻ block nên mỗi div sẽ xuống dòng mới và chiếm cả chiều ngang. Thẻ span là thẻ inline nên Text A và Text B nằm cùng một dòng. Thẻ strong cũng là inline nên Text C và Text D nằm cùng một dòng, trong đó Text D được in đậm.

### Câu A4

Đề bài: Giải thích sự khác nhau giữa thead, tbody, tfoot. Vì sao không nên dùng table để tạo layout trang web?

Bài làm:

Nguồn: 05_tables_hyperlinks.md, phần Table.

thead dùng để chứa phần tiêu đề của bảng. tbody dùng để chứa dữ liệu chính của bảng. tfoot dùng để chứa phần cuối bảng, thường là ghi chú hoặc tổng kết.

Không nên dùng table để tạo layout trang web vì:

1. Table dùng để trình bày dữ liệu dạng bảng, không phải để chia bố cục.
2. Dùng table làm layout khiến trang khó responsive trên điện thoại.
3. Trình đọc màn hình có thể hiểu nhầm bố cục là dữ liệu bảng.
4. Code HTML sẽ rối và khó sửa khi website lớn hơn.

## PHẦN B - THỰC HÀNH CODE

### Bài B1

Đề bài: Tạo file profile.html, làm trang giới thiệu bản thân bằng semantic HTML5, có header, nav, main, section, article, figure, figcaption, aside, footer và bảng kỹ năng. Không dùng thẻ div.

Bài làm: Đã làm trong file profile.html.

### Bài B2

Đề bài: Tạo file products.html, làm trang danh sách sản phẩm, có ít nhất 4 sản phẩm, mỗi sản phẩm là article. Có bảng so sánh 3 sản phẩm và footer có ít nhất 3 hyperlink.

Bài làm: Đã làm trong file products.html.

### Bài B3

Đề bài: Tìm và sửa các lỗi trong đoạn HTML. Tạo file debug.html cho bản sửa và liệt kê lỗi trong answers.md.

Bài làm: Đã sửa trong file debug.html.

Các lỗi đã sửa:

Lỗi 1: Dòng 1 — DOCTYPE thiếu html — Sửa thành <!DOCTYPE html>.

Lỗi 2: Dòng 2 — Thẻ html thiếu lang — Sửa thành <html lang="vi">.

Lỗi 3: Dòng 4 — Thẻ title chưa đóng — Sửa thành <title>Trang web ShopTLU</title>.

Lỗi 4: Dòng 5 — charset="utf8" chưa chuẩn — Sửa thành charset="UTF-8".

Lỗi 5: Phần head thiếu meta viewport — Thêm meta viewport.

Lỗi 6: Dòng 8 — h1 đóng sai — Sửa thành <h1>Welcome to ShopTLU</h1>.

Lỗi 7: Dòng 12 — Thẻ a của Trang chủ đóng sai — Sửa thành <a href="/">Trang chủ</a>.

Lỗi 8: Dòng 13 — Link products nên ghi rõ đường dẫn — Sửa thành <a href="/products">Sản phẩm</a>.

Lỗi 9: Dòng 19 — h3 chưa hợp lý trong section đầu tiên — Sửa thành h2.

Lỗi 10: Dòng 20 — img thiếu dấu ngoặc kép và thiếu alt — Sửa thành <img src="iphone.jpg" alt="iPhone 16 Pro">.

Lỗi 11: Dòng 22 — Lồng thẻ p và b sai thứ tự — Sửa thành <p>Giá: <strong>25.990.000đ</strong></p>.

Lỗi 12: Bảng thiếu caption — Thêm caption cho bảng.

Lỗi 13: Hàng tiêu đề bảng dùng td — Sửa thành th.

Lỗi 14: Bảng thiếu thead và tbody — Thêm thead và tbody.

Lỗi 15: Có hai thẻ main — Đổi main thứ hai thành aside.

Lỗi 16: Footer có p chưa đóng — Sửa thành <p>&copy; 2026 ShopTLU</p>.

Lỗi 17: Cuối file thiếu thẻ đóng html — Thêm </html>.

### Bài B4

Đề bài: Chọn một trang web thật trong tiki.vn, shopee.vn hoặc thegioididong.com. Dùng DevTools để phân tích semantic tags, table và form.

Bài làm:

Trang chọn: thegioididong.com.

1. Semantic HTML5:

Trang có thể dùng các thẻ như header cho phần đầu trang, nav cho menu điều hướng, section hoặc article cho các khu vực nội dung và sản phẩm.

Hai điểm có thể chưa đúng semantic là một số khối sản phẩm vẫn dùng nhiều div thay vì article, và một số phần bấm có thể dùng div hoặc span thay vì button hoặc a.

Screenshot: screenshots/B4_elements_semantic.png

2. Table:

Table thường nằm ở phần thông số kỹ thuật sản phẩm. Bảng này hiển thị các thông tin như màn hình, camera, chip, RAM, pin. Cần kiểm tra trong DevTools để ghi rõ có dùng thead, tbody hay không.

Screenshot: screenshots/B4_table.png

3. Form:

Form thường là ô tìm kiếm ở đầu trang. Cần kiểm tra trong DevTools để ghi action, method và input type. Nếu method không ghi thì trình duyệt mặc định là GET.

Screenshot: screenshots/B4_form.png

## PHẦN C - SUY LUẬN

### Câu C1

Đề bài: Thiết kế cấu trúc HTML cho trang chi tiết sản phẩm. Trang có header, navigation, breadcrumb, ảnh sản phẩm, thông tin sản phẩm, bảng thông số, đánh giá, sidebar và footer. Mỗi thẻ phải có comment giải thích.

Bài làm:

```html
<!DOCTYPE html>
<html lang="vi"> <!-- html là thẻ gốc, lang vi cho biết trang dùng tiếng Việt -->
<head> <!-- head chứa thông tin cấu hình trang -->
    <meta charset="UTF-8"> <!-- charset giúp hiển thị tiếng Việt đúng -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- viewport giúp trang phù hợp màn hình điện thoại -->
    <title>Chi tiết sản phẩm</title> <!-- title hiển thị trên tab trình duyệt -->
</head>
<body> <!-- body chứa nội dung hiển thị -->
    <header> <!-- header là phần đầu trang -->
        <h1>ShopTLU</h1> <!-- h1 là tiêu đề chính -->
        <nav> <!-- nav dùng cho menu điều hướng -->
            <a href="/">Trang chủ</a>
            <a href="/products">Sản phẩm</a>
            <a href="/contact">Liên hệ</a>
        </nav>
    </header>

    <nav aria-label="breadcrumb"> <!-- nav vì breadcrumb cũng là điều hướng -->
        <ol> <!-- ol vì breadcrumb có thứ tự -->
            <li><a href="/">Trang chủ</a></li>
            <li><a href="/dien-thoai">Điện thoại</a></li>
            <li>iPhone 16</li>
        </ol>
    </nav>

    <main> <!-- main chứa nội dung chính -->
        <article> <!-- article vì sản phẩm là một nội dung độc lập -->
            <section> <!-- section nhóm khu vực ảnh sản phẩm -->
                <h2>Ảnh sản phẩm</h2>
                <figure> <!-- figure dùng cho ảnh có chú thích -->
                    <img src="image1.jpg" alt="Ảnh sản phẩm 1">
                    <figcaption>Ảnh sản phẩm 1</figcaption>
                </figure>
                <figure>
                    <img src="image2.jpg" alt="Ảnh sản phẩm 2">
                    <figcaption>Ảnh sản phẩm 2</figcaption>
                </figure>
                <figure>
                    <img src="image3.jpg" alt="Ảnh sản phẩm 3">
                    <figcaption>Ảnh sản phẩm 3</figcaption>
                </figure>
                <figure>
                    <img src="image4.jpg" alt="Ảnh sản phẩm 4">
                    <figcaption>Ảnh sản phẩm 4</figcaption>
                </figure>
                <figure>
                    <img src="image5.jpg" alt="Ảnh sản phẩm 5">
                    <figcaption>Ảnh sản phẩm 5</figcaption>
                </figure>
            </section>

            <section> <!-- section nhóm thông tin sản phẩm -->
                <h2>Thông tin sản phẩm</h2>
                <h3>iPhone 16</h3>
                <p><strong>25.990.000đ</strong></p> <!-- strong nhấn mạnh giá -->
                <p>Đánh giá: 5 sao</p>
                <p>Mô tả sản phẩm.</p>
            </section>

            <section> <!-- section nhóm thông số kỹ thuật -->
                <h2>Thông số kỹ thuật</h2>
                <table> <!-- table dùng vì thông số là dữ liệu dạng bảng -->
                    <thead>
                        <tr>
                            <th>Thông số</th>
                            <th>Chi tiết</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Màn hình</td>
                            <td>6.1 inch</td>
                        </tr>
                        <tr>
                            <td>Bộ nhớ</td>
                            <td>256GB</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section> <!-- section nhóm đánh giá và bình luận -->
                <h2>Đánh giá và bình luận</h2>
                <article> <!-- article vì mỗi bình luận là nội dung riêng -->
                    <h3>Người dùng A</h3>
                    <p>Sản phẩm tốt.</p>
                </article>
            </section>
        </article>

        <aside> <!-- aside chứa nội dung phụ là sản phẩm tương tự -->
            <h2>Sản phẩm tương tự</h2>
            <article>
                <h3>iPhone 15</h3>
                <p>Giá tham khảo: 18.990.000đ</p>
            </article>
        </aside>
    </main>

    <footer> <!-- footer là phần chân trang -->
        <p>&copy; 2026 ShopTLU</p>
    </footer>
</body>
</html>
```

### Câu C2

Đề bài: Phản biện ý kiến: “Dùng div cho mọi thứ rồi thêm class là được, không cần semantic HTML.”

Bài làm:

Theo em, ý kiến trên chưa đúng hoàn toàn. Dùng div có thể tạo được giao diện, nhưng div không nói rõ ý nghĩa của nội dung. Khi một trang web dùng các thẻ semantic như header, nav, main, article, section, footer thì trình duyệt, công cụ tìm kiếm và trình đọc màn hình sẽ hiểu cấu trúc trang tốt hơn.

Về SEO, semantic HTML giúp Google nhận biết đâu là nội dung chính, đâu là menu, đâu là sản phẩm hoặc bài viết. Nhờ vậy nội dung có thể được đánh giá chính xác hơn. Về Accessibility, người dùng sử dụng screen reader có thể nhảy nhanh đến vùng điều hướng, nội dung chính hoặc footer. Điều này rất quan trọng với người khiếm thị hoặc người dùng công cụ hỗ trợ.

Ví dụ, một sản phẩm nếu viết bằng div class="product" thì vẫn hiển thị được, nhưng không rõ đó là một nội dung độc lập. Nếu dùng article, h2, figure và figcaption thì cấu trúc rõ hơn: có tên sản phẩm, hình ảnh và chú thích ảnh.

Tuy nhiên, div vẫn có ích trong thực tế. Khi cần nhóm các phần tử để căn chỉnh bố cục hoặc khi không có thẻ semantic nào phù hợp, ta vẫn có thể dùng div. Cách tốt nhất là dùng semantic HTML cho cấu trúc chính và dùng div khi thật sự cần cho bố cục.

## PHẦN D - VIDEO THỰC HÀNH OBS

Đề bài: Quay video code-along trang giới thiệu sản phẩm Semantic HTML5, vừa code vừa thuyết minh.

Bài làm: Code mẫu đã tạo trong file video_code.html. Video sẽ đặt trong thư mục videos với tên PBT01_TrinhQuangHuy_MaSV.mp4 hoặc dán link video vào đây.
