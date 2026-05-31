# PHIẾU BÀI TẬP 08 - JAVASCRIPT FUNCTIONS, ARRAYS & OBJECTS

Họ tên: Trịnh Quang Huy  
Lớp: 66HTTT1

## PHẦN A - KIỂM TRA ĐỌC HIỂU

### Câu A1

Đề bài: Viết hàm `tinhThueBaoHiem(luong)` theo 3 cách: Function Declaration, Function Expression, Arrow Function. Giải thích khác nhau về hoisting.

Bài làm:

```javascript
// Function Declaration
function tinhThueBaoHiem1(luong) {
    const thue = luong > 11000000 ? luong * 0.1 : 0;
    return { thuong: thue, thuc_nhan: luong - thue };
}

// Function Expression
const tinhThueBaoHiem2 = function(luong) {
    const thue = luong > 11000000 ? luong * 0.1 : 0;
    return { thuong: thue, thuc_nhan: luong - thue };
};

// Arrow Function
const tinhThueBaoHiem3 = (luong) => {
    const thue = luong > 11000000 ? luong * 0.1 : 0;
    return { thuong: thue, thuc_nhan: luong - thue };
};
```

Function Declaration được hoisting nên có thể gọi trước khi khai báo. Function Expression và Arrow Function gán vào biến `const`, nên không gọi được trước khi khai báo.

Ví dụ:

```javascript
console.log(sum(2, 3));
function sum(a, b) {
    return a + b;
}

console.log(minus(5, 2));
const minus = function(a, b) {
    return a - b;
};
```

Hàm `sum` chạy được, còn `minus` bị lỗi vì biến `minus` chưa được khởi tạo.

### Câu A2

Đề bài: Dự đoán output của closure counter và vòng lặp `var`/`let` với `setTimeout`.

Bài làm:

Đoạn 1:

```text
1
2
3
2
2
```

Giải thích: Hàm `counter()` tạo biến `count` bên trong. Các hàm `increment`, `decrement`, `getCount` vẫn nhớ được biến `count`, đó gọi là closure.

Đoạn 2:

```text
var: 3
var: 3
var: 3
let: 0
let: 1
let: 2
```

Giải thích: `var` có function scope nên sau vòng lặp, chỉ còn một biến `i` với giá trị là 3. Các hàm trong `setTimeout` đều dùng chung biến đó nên in ra 3. `let` có block scope nên mỗi vòng lặp có một biến `j` riêng, vì vậy in ra 0, 1, 2.

### Câu A3

Đề bài: Cho mảng `nums`, viết 1 dòng code cho mỗi yêu cầu bằng arrow function.

Bài làm:

```javascript
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNums = nums.filter(n => n % 2 === 0);
const multiplied = nums.map(n => n * 3);
const total = nums.reduce((sum, n) => sum + n, 0);
const firstGreaterThan7 = nums.find(n => n > 7);
const hasGreaterThan10 = nums.some(n => n > 10);
const allGreaterThan0 = nums.every(n => n > 0);
const descriptions = nums.map(n => `Số ${n} là ${n % 2 === 0 ? "chẵn" : "lẻ"}`);
const reversed = [...nums].reverse();
```

### Câu A4

Đề bài: Dự đoán output của object destructuring và spread.

Bài làm:

```javascript
console.log(name, price, ram, color);
```

Kết quả:

```text
iPhone 16 25990000 8 Titan
```

```javascript
console.log(specs);
```

Kết quả: lỗi `ReferenceError`, vì trong đoạn destructuring chỉ lấy `ram` và `color` từ `specs`, chứ không tạo biến tên là `specs`.

```javascript
console.log(updated.price);
console.log(updated.sale);
console.log(product.price);
```

Kết quả:

```text
23990000
true
25990000
```

Giải thích: Spread tạo object mới, giá của `updated` đổi nhưng object gốc `product` không đổi.

```javascript
copy.specs.ram = 16;
console.log(product.specs.ram);
```

Kết quả:

```text
16
```

Giải thích: Spread chỉ copy nông. Object lồng bên trong như `specs` vẫn dùng chung tham chiếu với object gốc.

## PHẦN B - THỰC HÀNH CODE

### Bài B1

Đề bài: Tạo file `product_manager.js`, viết các hàm quản lý sản phẩm E-Commerce, bắt buộc dùng `map`, `filter`, `reduce`, `sort`, `find`.

Bài làm: Đã làm trong file `product_manager.js`.

### Bài B2

Đề bài: Tạo file `shopping_cart.js`, viết module giỏ hàng dùng closure, không dùng class.

Bài làm: Đã làm trong file `shopping_cart.js`.

### Bài B3

Đề bài: Tạo file `higher_order.js`, viết các hàm higher-order: `pipe`, `memoize`, `debounce`, `retry`.

Bài làm: Đã làm trong file `higher_order.js`.

## PHẦN C - SUY LUẬN

### Câu C1

Đề bài: Refactor code `processOrders` bằng array methods, arrow function, destructuring, không quá 10 dòng.

Bài làm:

```javascript
const processOrders = (orders) => orders
    .filter(({ status, total }) => status === "completed" && total > 100000)
    .map(({ id, customer, total }) => {
        const discount = total * 0.1;
        return { id, customer, total, discount, finalTotal: total - discount };
    })
    .sort((a, b) => b.finalTotal - a.finalTotal);
```

Giải thích: `filter` lọc đơn hàng hoàn thành và tổng tiền trên 100000. `map` tạo object mới có giảm giá và tổng cuối. `sort` sắp xếp giảm dần theo `finalTotal`.

### Câu C2

Đề bài: Thiết kế thư viện `miniArray` có `map`, `filter`, `reduce` tự viết, không dùng built-in.

Bài làm:

```javascript
const miniArray = {
    map(arr, fn) {
        const result = [];
        for (let i = 0; i < arr.length; i++) {
            result.push(fn(arr[i], i, arr));
        }
        return result;
    },

    filter(arr, fn) {
        const result = [];
        for (let i = 0; i < arr.length; i++) {
            if (fn(arr[i], i, arr)) {
                result.push(arr[i]);
            }
        }
        return result;
    },

    reduce(arr, fn, initialValue) {
        let accumulator = initialValue;
        for (let i = 0; i < arr.length; i++) {
            accumulator = fn(accumulator, arr[i], i, arr);
        }
        return accumulator;
    }
};

console.log(miniArray.map([1, 2, 3], x => x * 2));
console.log(miniArray.filter([1, 2, 3, 4], x => x > 2));
console.log(miniArray.reduce([1, 2, 3, 4], (a, b) => a + b, 0));
```

## PHẦN D - VIDEO THỰC HÀNH OBS

Đề bài: Quay video code-along Mini Shopping Cart bằng Closure.

Bài làm: Code mẫu đã tạo trong file `video_shopping_cart.js`. Video sẽ đặt trong thư mục `videos` với tên `PBT08_TrinhQuangHuy_MaSV.mp4` hoặc dán link video vào đây.
