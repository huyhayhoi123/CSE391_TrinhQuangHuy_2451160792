# PHIẾU BÀI TẬP 02 - HTML5 FORMS & MEDIA

Họ tên: Trịnh Quang Huy  
Lớp: 66HTTT1

## PHẦN A - KIỂM TRA ĐỌC HIỂU

### Câu A1

Đề bài: Liệt kê 10 input types khác nhau trong HTML5, cho mỗi type ghi giao diện, validation tự động nếu có và use case trong trang E-Commerce.

Bài làm:

1. type="email" → Ô nhập email, tự kiểm tra có dạng email hợp lệ → Dùng cho form đăng ký tài khoản.
2. type="password" → Ô nhập mật khẩu, ký tự bị che → Dùng cho đăng nhập hoặc đăng ký.
3. type="text" → Ô nhập văn bản thường, không tự kiểm tra đặc biệt → Dùng nhập họ tên, username, địa chỉ.
4. type="tel" → Ô nhập số điện thoại, thường hiện bàn phím số trên điện thoại → Dùng nhập số điện thoại giao hàng.
5. type="number" → Ô nhập số, có thể có nút tăng giảm, kiểm tra min và max → Dùng nhập số lượng sản phẩm.
6. type="date" → Ô chọn ngày từ lịch → Dùng nhập ngày sinh hoặc ngày giao hàng.
7. type="checkbox" → Ô tích chọn, kiểm tra được required nếu bắt buộc → Dùng cho đồng ý điều khoản.
8. type="radio" → Nút chọn một trong nhiều lựa chọn cùng name → Dùng chọn giới tính hoặc phương thức thanh toán.
9. type="range" → Thanh trượt chọn giá trị trong khoảng min max → Dùng chọn số ngày giao hàng.
10. type="search" → Ô tìm kiếm, giao diện giống ô nhập text nhưng dành cho tìm kiếm → Dùng tìm sản phẩm trong cửa hàng.

### Câu A2

Đề bài: Dự đoán điều gì xảy ra khi bấm Submit với 5 trường hợp validation. Sau đó tạo file validation_test.html và so sánh với thực tế.

Bài làm:

Trường hợp 1: input type="text" có required nhưng value rỗng. Khi submit, trình duyệt sẽ chặn gửi form và báo cần điền trường này vì required bắt buộc không được để trống.

Trường hợp 2: input type="email" có value="abc". Khi submit, trình duyệt sẽ chặn gửi form vì abc không đúng định dạng email, thiếu ký tự @ và phần tên miền.

Trường hợp 3: input type="number" min="1" max="10" value="15". Khi submit, trình duyệt sẽ chặn gửi form vì 15 lớn hơn max là 10.

Trường hợp 4: input type="text" pattern="[0-9]{10}" value="abc123". Khi submit, trình duyệt sẽ chặn gửi form vì giá trị không gồm đúng 10 chữ số.

Trường hợp 5: input type="password" minlength="8" value="123". Khi submit, trình duyệt sẽ chặn gửi form vì mật khẩu chỉ có 3 ký tự, nhỏ hơn minlength là 8.

Đã tạo file validation_test.html để kiểm tra thực tế. Kết quả thực tế giống dự đoán: trình duyệt không cho submit và hiện thông báo validation tương ứng.

Screenshot: screenshots/A2_validation_test.png

### Câu A3

Đề bài: Giải thích label, fieldset + legend, aria-label trong accessibility.

Bài làm:

1. label for="email" quan trọng vì nó liên kết chữ mô tả với input có id tương ứng. Người dùng screen reader sẽ biết ô nhập đó dùng để nhập gì. Khi bấm vào label, con trỏ cũng tự focus vào input nên dễ sử dụng hơn.

2. fieldset và legend dùng khi cần nhóm nhiều input cùng một chủ đề. Ví dụ trong form đăng ký có nhóm Thông tin cá nhân gồm họ tên, email, số điện thoại. fieldset giúp gom nhóm, legend đặt tên cho nhóm đó.

Ví dụ:

```html
<fieldset>
    <legend>Thông tin cá nhân</legend>
    <label for="name">Họ tên:</label>
    <input type="text" id="name" name="name">
</fieldset>
```

3. aria-label dùng khi phần tử cần tên mô tả nhưng không có chữ label hiển thị trên giao diện, ví dụ nút chỉ có icon tìm kiếm. Không nên dùng aria-label khi đã có label vì có thể làm thông tin bị lặp hoặc gây nhầm cho screen reader.

### Câu A4

Đề bài: Giải thích loading="lazy", nhiều source trong video và thuộc tính alt của img.

Bài làm:

1. loading="lazy" trên img giúp ảnh chỉ tải khi gần xuất hiện trên màn hình. Nó cải thiện tốc độ tải ban đầu của trang và tiết kiệm băng thông. Không nên dùng cho ảnh quan trọng ở đầu trang như banner chính hoặc ảnh sản phẩm chính đầu tiên vì có thể làm ảnh xuất hiện chậm.

2. Nên cung cấp nhiều source trong video vì mỗi trình duyệt có thể hỗ trợ định dạng khác nhau. Nếu một format không chạy được thì trình duyệt có thể dùng format khác. Ba format video web phổ biến là MP4, WebM và Ogg.

3. Thuộc tính alt dùng để mô tả nội dung ảnh cho screen reader, SEO và trường hợp ảnh không tải được.

Alt tốt cho 3 trường hợp:

- Ảnh sản phẩm iPhone 16: alt="iPhone 16 màu xanh nhìn từ mặt trước và mặt sau".
- Ảnh trang trí: alt="".
- Ảnh biểu đồ doanh thu Q1/2026: alt="Biểu đồ doanh thu quý 1 năm 2026 tăng từ tháng 1 đến tháng 3".

### Câu A5

Đề bài: So sánh khi nào dùng img riêng và khi nào dùng figure + figcaption.

Bài làm:

Cách 1 dùng img riêng khi ảnh chỉ là một phần minh họa đơn giản, không cần chú thích riêng. Ví dụ: logo website trong header, icon giỏ hàng, ảnh avatar nhỏ, ảnh trang trí.

Cách 2 dùng figure + figcaption khi ảnh cần đi kèm chú thích hoặc là một nội dung độc lập. Ví dụ: ảnh sản phẩm kèm tên và giá, ảnh biểu đồ có chú thích, ảnh trong bài viết tin tức, ảnh hướng dẫn thao tác.

Với trang bán hàng, ảnh sản phẩm chính nên dùng figure + figcaption vì người xem hiểu rõ ảnh đó là sản phẩm nào và thông tin liên quan.

## PHẦN B - THỰC HÀNH CODE

### Bài B1

Đề bài: Tạo file register.html, làm form đăng ký tài khoản E-Commerce, có 3 fieldset, validation attributes, label đầy đủ và nhiều input types.

Bài làm: Đã làm trong file register.html.

Giải thích thêm: HTML không thể tự validate xác nhận mật khẩu có giống mật khẩu chính hay không. Muốn kiểm tra hai ô password giống nhau thì cần JavaScript hoặc xử lý ở Backend.

### Bài B2

Đề bài: Tạo file media.html, làm trang giới thiệu sản phẩm có ảnh, YouTube iframe, video, audio, ảnh responsive và SVG inline.

Bài làm: Đã làm trong file media.html.

### Bài B3

Đề bài: Tạo file checkout.html, làm form đặt hàng hoàn chỉnh gồm giỏ hàng, form thanh toán và thông tin giao hàng.

Bài làm: Đã làm trong file checkout.html.

## PHẦN C - PHÂN TÍCH & SUY LUẬN

### Câu C1

Đề bài: Form đã cho có 8 lỗi về validation, accessibility và best practices. Tìm và sửa tất cả.

Bài làm:

Lỗi 1: Dòng 2 — Input Tên không có label for, id, name và required — Sửa thành:

```html
<label for="name">Tên:</label>
<input type="text" id="name" name="name" required>
```

Lỗi 2: Dòng 4 — Input email không có label for, id, name và required — Sửa thành:

```html
<label for="email">Email:</label>
<input type="email" id="email" name="email" required placeholder="Email của bạn">
```

Lỗi 3: Dòng 6 — Input password không có label, id, name, required và minlength — Sửa thành:

```html
<label for="password">Mật khẩu:</label>
<input type="password" id="password" name="password" required minlength="8" placeholder="Mật khẩu">
```

Lỗi 4: Dòng 7 — Input nhập lại mật khẩu không có label, id, name và required — Sửa thành:

```html
<label for="confirm-password">Nhập lại mật khẩu:</label>
<input type="password" id="confirm-password" name="confirm-password" required minlength="8" placeholder="Nhập lại mật khẩu">
```

Lỗi 5: Dòng 9 — Phone dùng type="text" không phù hợp và thiếu pattern — Sửa thành:

```html
<label for="phone">Phone:</label>
<input type="tel" id="phone" name="phone" pattern="[0-9]{10}" placeholder="0901234567">
```

Lỗi 6: Dòng 11 — select không có label, id và name — Sửa thành:

```html
<label for="city">Thành phố:</label>
<select id="city" name="city" required>
    <option value="">Chọn thành phố</option>
    <option value="ha-noi">Hà Nội</option>
    <option value="tp-hcm">TP.HCM</option>
</select>
```

Lỗi 7: Dòng 16 — Label điều khoản không có input checkbox bên trong hoặc for liên kết với checkbox — Sửa thành:

```html
<label for="agree">
    <input type="checkbox" id="agree" name="agree" required>
    Tôi đồng ý điều khoản
</label>
```

Lỗi 8: Dòng 20 — Nên dùng button type="submit" thay vì input submit để dễ thêm nội dung và dễ mở rộng — Sửa thành:

```html
<button type="submit">Gửi</button>
```

Bản sửa đầy đủ:

```html
<form action="#" method="POST">
    <label for="name">Tên:</label>
    <input type="text" id="name" name="name" required>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required placeholder="Email của bạn">

    <label for="password">Mật khẩu:</label>
    <input type="password" id="password" name="password" required minlength="8" placeholder="Mật khẩu">

    <label for="confirm-password">Nhập lại mật khẩu:</label>
    <input type="password" id="confirm-password" name="confirm-password" required minlength="8" placeholder="Nhập lại mật khẩu">

    <label for="phone">Phone:</label>
    <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" placeholder="0901234567">

    <label for="city">Thành phố:</label>
    <select id="city" name="city" required>
        <option value="">Chọn thành phố</option>
        <option value="ha-noi">Hà Nội</option>
        <option value="tp-hcm">TP.HCM</option>
    </select>

    <label for="agree">
        <input type="checkbox" id="agree" name="agree" required>
        Tôi đồng ý điều khoản
    </label>

    <button type="submit">Gửi</button>
</form>
```

### Câu C2

Đề bài: Thiết kế chiến lược validation cho form đăng ký ngân hàng số gồm CMND/CCCD, số tài khoản, email và PIN.

Bài làm:

1. Regex pattern:

CMND/CCCD đúng 12 chữ số:

```html
pattern="[0-9]{12}"
```

Số tài khoản từ 10 đến 15 chữ số:

```html
pattern="[0-9]{10,15}"
```

PIN đúng 6 chữ số và không hiển thị:

```html
<input type="password" pattern="[0-9]{6}" inputmode="numeric">
```

2. HTML5 validation chưa đủ an toàn cho ứng dụng ngân hàng. Lý do là validation ở frontend có thể bị tắt, bị sửa bằng DevTools hoặc bị bỏ qua khi gửi request trực tiếp đến server. Ứng dụng ngân hàng bắt buộc phải validate lại ở backend.

3. Ba loại validation HTML5 không thể làm tốt hoặc không thể làm được:

- Kiểm tra mật khẩu nhập lại có giống mật khẩu chính hay không.
- Kiểm tra email hoặc số điện thoại đã tồn tại trong hệ thống chưa.
- Kiểm tra dữ liệu với cơ sở dữ liệu hoặc API ngân hàng.

4. Hai rủi ro nếu chỉ validate frontend:

- Người dùng có thể gửi dữ liệu sai định dạng hoặc độc hại trực tiếp lên server.
- Hệ thống có thể bị tấn công hoặc lưu dữ liệu không hợp lệ vì backend tin vào dữ liệu từ trình duyệt.

## PHẦN D - VIDEO THỰC HÀNH OBS

Đề bài: Quay video code-along Form đăng ký với HTML5 Validation, vừa code vừa giải thích.

Bài làm: Code mẫu đã tạo trong file video_code.html. Video sẽ đặt trong thư mục videos với tên PBT02_TrinhQuangHuy_MaSV.mp4 hoặc dán link video vào đây.
