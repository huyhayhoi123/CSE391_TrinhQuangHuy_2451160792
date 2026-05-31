# PHIẾU BÀI TẬP 07 - JAVASCRIPT BASICS

Họ tên: Trịnh Quang Huy  
Lớp: 66HTTT1

## PHẦN A - KIỂM TRA ĐỌC HIỂU

### Câu A1

Đề bài: Dự đoán output của các đoạn code về var, let, const. Tạo file var_let_const.js, chạy và so sánh.

Bài làm:

Nguồn: 03_variables.md, phần var / let / const, scope và hoisting.

Đoạn 1:

```javascript
console.log(x);
var x = 5;
```

Kết quả: `undefined`.

Giải thích: `var` bị hoisting phần khai báo lên đầu, nhưng giá trị `5` chưa được gán nên khi in ra là `undefined`.

Đoạn 2:

```javascript
console.log(y);
let y = 10;
```

Kết quả: `ReferenceError`.

Giải thích: `let` cũng có hoisting nhưng nằm trong vùng TDZ, chưa thể truy cập trước khi khai báo.

Đoạn 3:

```javascript
const z = 15;
z = 20;
console.log(z);
```

Kết quả: `TypeError`.

Giải thích: `const` không cho gán lại giá trị mới.

Đoạn 4:

```javascript
const arr = [1, 2, 3];
arr.push(4);
console.log(arr);
```

Kết quả: `[1, 2, 3, 4]`.

Giải thích: `const` không cho gán lại biến `arr`, nhưng vẫn cho thay đổi nội dung bên trong mảng.

Đoạn 5:

```javascript
let a = 1;
{
    let a = 2;
    console.log("Trong block:", a);
}
console.log("Ngoài block:", a);
```

Kết quả:

```text
Trong block: 2
Ngoài block: 1
```

Giải thích: `let` có block scope nên biến `a` trong block và ngoài block là 2 biến khác nhau.

File kiểm chứng: `var_let_const.js`.

### Câu A2

Đề bài: Dự đoán kết quả về data types và type coercion. Chạy code kiểm tra và giải thích vì sao `"5" + 3` khác `"5" - 3`.

Bài làm:

Nguồn: 02_data_types.md, phần data types và type coercion.

```text
typeof null              → object
typeof undefined         → undefined
typeof NaN               → number
"5" + 3                 → "53"
"5" - 3                 → 2
"5" * "3"               → 15
true + true              → 2
[] + []                  → ""
[] + {}                  → "[object Object]"
{} + []                  → 0 hoặc "[object Object]" tùy môi trường chạy
```

Giải thích: Toán tử `+` nếu có chuỗi thì thường nối chuỗi, nên `"5" + 3` thành `"53"`. Toán tử `-` là phép trừ nên JavaScript ép kiểu chuỗi `"5"` thành số `5`, kết quả là `2`.

File kiểm chứng: `type_coercion_test.js`.

### Câu A3

Đề bài: Dự đoán kết quả so sánh `==` và `===`. Từ giờ nên dùng loại nào và vì sao?

Bài làm:

Nguồn: 02_data_types.md, phần comparison và equality.

```text
5 == "5"              → true
5 === "5"             → false
null == undefined     → true
null === undefined    → false
NaN == NaN            → false
0 == false            → true
0 === false           → false
"" == false           → true
```

Nên dùng `===` vì so sánh nghiêm ngặt cả giá trị và kiểu dữ liệu. Dùng `===` giúp tránh lỗi khó hiểu do JavaScript tự ép kiểu.

### Câu A4

Đề bài: Liệt kê tất cả giá trị falsy trong JavaScript và dự đoán kết quả các lệnh if.

Bài làm:

Nguồn: 04_control_structures.md, phần truthy và falsy.

Các giá trị falsy trong JavaScript gồm: `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN`.

Kết quả:

```text
if ("0")  → In A
if ("")   → Không in B
if ([])   → In C
if ({})   → In D
if (null) → Không in E
if (0)    → Không in F
if (-1)   → In G
if (" ")  → In H
```

Giải thích: Chuỗi khác rỗng, mảng rỗng và object rỗng đều là truthy. Chuỗi rỗng, null và 0 là falsy.

### Câu A5

Đề bài: Viết lại 3 cách nối chuỗi bằng template literal.

Bài làm:

```javascript
var greeting = `Xin chào ${name}! Bạn ${age} tuổi.`;
```

```javascript
var url = `https://api.example.com/users/${userId}/orders?page=${page}`;
```

```javascript
var html = `
<div class="card">
    <h2>${title}</h2>
    <p>${description}</p>
    <span>Giá: ${price}đ</span>
</div>`;
```

## PHẦN B - THỰC HÀNH CODE

### Bài B1

Đề bài: Tạo file calculator.js, viết hàm calculate(num1, operator, num2), xử lý chia cho 0, operator không hợp lệ và input không phải số.

Bài làm: Đã làm trong file `calculator.js`.

### Bài B2

Đề bài: Tạo file student_data.js, xử lý dữ liệu sinh viên, tính điểm trung bình, xếp loại, thống kê, tìm cao nhất/thấp nhất, tính trung bình từng môn và trung bình theo giới tính.

Bài làm: Đã làm trong file `student_data.js`.

### Bài B3

Đề bài: Tạo file guess_number.html và guess.js, viết game đoán số từ 1 đến 100, giới hạn 7 lần, kiểm tra input và cảnh báo nếu đoán trùng.

Bài làm: Đã làm trong file `guess_number.html` và `guess.js`.

### Bài B4

Đề bài: Tạo file fizzbuzz.js, làm FizzBuzz classic và hàm customFizzBuzz(n, rules).

Bài làm: Đã làm trong file `fizzbuzz.js`.

## PHẦN C - SUY LUẬN

### Câu C1

Đề bài: Tìm và sửa tất cả lỗi trong code tính giá giảm giá. Có lỗi ẩn liên quan đến var trong vòng lặp.

Bài làm:

Lỗi 1: Hàm không kiểm tra `giaBan` có phải số không.  
Sửa: Dùng `typeof giaBan !== "number" || isNaN(giaBan)`.

Lỗi 2: Hàm không kiểm tra `phanTramGiam` có phải số không.  
Sửa: Kiểm tra kiểu dữ liệu của `phanTramGiam`.

Lỗi 3: `if (giaSauGiam = 0)` dùng phép gán thay vì phép so sánh.  
Sửa: `if (giaSauGiam === 0)`.

Lỗi 4: Thiếu dấu chấm phẩy.  
Sửa: Thêm `;` để code rõ ràng hơn.

Lỗi 5: Test truyền `"100000"` là chuỗi, không phải số.  
Sửa: Truyền `100000` hoặc ép kiểu bằng `Number()`.

Lỗi 6: Vòng lặp dùng `var i`, khi `setTimeout` chạy thì `i` đã thành 5, nên in ra `Item 5` nhiều lần.  
Sửa: Dùng `let i` để mỗi vòng lặp có block scope riêng.

Bản sửa:

```javascript
function tinhGiaGiamGia(giaBan, phanTramGiam) {
    if (typeof giaBan !== "number" || isNaN(giaBan) || giaBan < 0) {
        return "Giá bán không hợp lệ";
    }

    if (typeof phanTramGiam !== "number" || isNaN(phanTramGiam) || phanTramGiam < 0 || phanTramGiam > 100) {
        return "Phần trăm giảm không hợp lệ";
    }

    const giamGia = giaBan * phanTramGiam / 100;
    const giaSauGiam = giaBan - giamGia;

    if (giaSauGiam === 0) {
        console.log("Sản phẩm miễn phí!");
    }

    return giaSauGiam;
}

const gia = tinhGiaGiamGia(100000, 20);
console.log("Giá sau giảm: " + gia + "đ");

const gia2 = tinhGiaGiamGia(50000, 110);
console.log("Giá: " + gia2);

for (let i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log("Item " + i);
    }, 1000);
}
```

File kiểm chứng: `debug_discount.js`.

### Câu C2

Đề bài: Viết chương trình tính hóa đơn nhà hàng với giảm giá, VAT và tip.

Bài làm: Đã làm trong file `restaurant_bill.js`.

Quy tắc đã xử lý:

1. Tổng tiền lớn hơn 500.000đ thì giảm 10%.
2. Tổng tiền lớn hơn 1.000.000đ thì giảm 15%.
3. Nếu là thứ 3 thì giảm thêm 5%.
4. VAT là 8%.
5. Tip 5% là tùy chọn.

## PHẦN D - VIDEO THỰC HÀNH OBS

Đề bài: Quay video code-along về var/let/const, type coercion, == vs === và hàm calculate.

Bài làm: Code mẫu để quay video đã tạo trong file `video_demo.js`. Video đặt trong thư mục `videos/` với tên `PBT07_TrinhQuangHuy_MaSV.mp4` hoặc dán link YouTube/Drive vào đây.
