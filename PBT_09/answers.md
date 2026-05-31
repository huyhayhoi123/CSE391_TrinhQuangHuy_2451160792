# PHIẾU BÀI TẬP 09 - DOM MANIPULATION & EVENTS

Họ tên: Trịnh Quang Huy  
Lớp: 66HTTT1

## PHẦN A - KIỂM TRA ĐỌC HIỂU

### Câu A1

Đề bài: Vẽ DOM tree cho đoạn HTML Todo App và viết querySelector cho các yêu cầu.

Bài làm:

Nguồn: 19_dom_manipulation.md, phần DOM tree và querySelector.

DOM tree:

```text
div#app
├── header
│   ├── h1: Todo App
│   └── nav
│       ├── a.active: All
│       ├── a: Active
│       └── a: Completed
└── main
    ├── form#todoForm
    │   ├── input#todoInput[type="text"]
    │   └── button[type="submit"]: Add
    └── ul#todoList
        ├── li.todo-item: Learn HTML
        └── li.todo-item.completed: Learn CSS
```

querySelector:

```javascript
// Chọn thẻ h1
document.querySelector("h1");

// Chọn input trong form
document.querySelector("#todoForm input");

// Chọn tất cả .todo-item
document.querySelectorAll(".todo-item");

// Chọn link đang active
document.querySelector("nav a.active");

// Chọn li đầu tiên trong #todoList
document.querySelector("#todoList li:first-child");

// Chọn tất cả a bên trong nav
document.querySelectorAll("nav a");
```

### Câu A2

Đề bài: Giải thích sự khác nhau giữa innerHTML và textContent. Tại sao innerHTML có thể gây XSS? Sửa thế nào?

Bài làm:

Nguồn: 19_dom_manipulation.md, phần DOM manipulation và bảo mật khi thêm nội dung vào trang.

`innerHTML` dùng để đọc hoặc ghi nội dung HTML bên trong một phần tử. Nếu truyền chuỗi có thẻ HTML thì trình duyệt sẽ hiểu và render như HTML.

`textContent` dùng để đọc hoặc ghi nội dung dạng text thuần. Nếu truyền chuỗi có thẻ HTML thì trình duyệt chỉ hiển thị như văn bản, không chạy như mã HTML.

Ví dụ dùng `innerHTML` khi nội dung do lập trình viên tự kiểm soát:

```javascript
box.innerHTML = "<strong>Xin chào</strong>";
```

Ví dụ dùng `textContent` khi nội dung đến từ người dùng:

```javascript
box.textContent = userInput;
```

`innerHTML` có thể gây XSS vì nếu người dùng nhập mã độc như thẻ có sự kiện JavaScript, trình duyệt có thể thực thi mã đó.

Code nguy hiểm:

```javascript
const userInput = document.querySelector("#search").value;
document.querySelector("#result").innerHTML = userInput;
```

Cách sửa:

```javascript
const userInput = document.querySelector("#search").value;
document.querySelector("#result").textContent = userInput;
```

### Câu A3

Đề bài: Dự đoán thứ tự console.log khi click vào button. Nếu dùng stopPropagation thì thay đổi thế nào?

Bài làm:

Nguồn: 19_dom_manipulation.md, phần Events và Event Bubbling.

Khi click vào button, event xảy ra ở button trước, sau đó nổi bọt lên inner rồi outer.

Output là:

```text
BUTTON
INNER
OUTER
```

Nếu bỏ comment dòng `e.stopPropagation()` trong event của button thì event dừng ở button, không nổi bọt lên cha.

Output khi đó là:

```text
BUTTON
```

## PHẦN B - THỰC HÀNH CODE

### Bài B1

Đề bài: Tạo Todo App hoàn chỉnh trong folder todo_app. Có thêm, xóa, toggle completed, đếm items left, filter, clear completed, edit todo và lưu LocalStorage.

Bài làm: Đã làm trong folder `todo_app/` gồm `index.html`, `style.css`, `app.js`.

Các chức năng đã làm:

1. Thêm todo bằng form submit.
2. Xóa todo bằng nút xóa.
3. Click vào text để toggle completed.
4. Đếm số todo chưa hoàn thành.
5. Lọc All / Active / Completed.
6. Xóa các todo đã completed.
7. Double click để sửa todo.
8. Lưu vào LocalStorage và load lại khi refresh.
9. Dùng `createElement`, `addEventListener`, event delegation trên `#todoList`.

### Bài B2

Đề bài: Tạo Interactive Product Catalog trong folder product_catalog. Sản phẩm render bằng JavaScript, có search, filter, sort, modal, cart badge và dark mode.

Bài làm: Đã làm trong folder `product_catalog/` gồm `index.html`, `style.css`, `app.js`.

Các chức năng đã làm:

1. Dữ liệu sản phẩm khai báo trong JS.
2. Render card sản phẩm bằng `createElement`.
3. Search realtime bằng event `input`.
4. Filter theo category.
5. Sort theo giá tăng, giá giảm, tên A-Z, rating cao nhất.
6. Click card mở modal chi tiết.
7. Click thêm giỏ làm tăng badge giỏ hàng.
8. Toggle dark mode bằng cách thêm/xóa class trên body.

### Bài B3

Đề bài: Tạo Form Validator trong folder form_validator. Validate realtime tên, email, password strength, confirm password, phone và submit khi hợp lệ.

Bài làm: Đã làm trong folder `form_validator/` gồm `index.html`, `style.css`, `app.js`.

Các chức năng đã làm:

1. Tên hợp lệ khi dài 2 đến 50 ký tự.
2. Email kiểm tra bằng regex.
3. Password có thanh độ mạnh yếu/trung bình/mạnh.
4. Confirm password kiểm tra khớp realtime.
5. Phone chỉ nhận 10 số và tự format dạng `0901-234-567`.
6. Submit button bị disabled đến khi form hợp lệ.
7. Submit thành công thì hiện modal thông tin đăng ký.

### Bài B4

Đề bài: Tạo Keyboard App trong folder keyboard_app. Có gallery ảnh, command palette, keyboard shortcuts và accessibility.

Bài làm: Đã làm trong folder `keyboard_app/` gồm `index.html`, `style.css`, `app.js`.

Các chức năng đã làm:

1. Dùng phím mũi tên trái/phải để chuyển ảnh.
2. Dùng phím số 1-9 để nhảy đến ảnh tương ứng.
3. Dùng Space để play/pause slideshow.
4. Dùng Escape để đóng modal hoặc command palette.
5. Dùng Ctrl+K mở command palette.
6. Gõ keyword để lọc command, Enter để chọn command.
7. Có focus ring và aria-label cho các phần tử tương tác.

## PHẦN C - DEBUG & PHÂN TÍCH

### Câu C1

Đề bài: Tìm và sửa tất cả lỗi trong code Counter with history.

Bài làm:

Lỗi 1: Dùng `innerHTML` để cập nhật count không cần thiết. Nên dùng `textContent` để an toàn hơn.

Sửa:

```javascript
countDisplay.textContent = count;
```

Lỗi 2: Event của decrement viết sai là `onclick`.

Sửa:

```javascript
document.querySelector("#decrementBtn").addEventListener("click", function() {
    count--;
    countDisplay.textContent = count;
});
```

Lỗi 3: Trong reset, `countDisplay = count` là sai vì `countDisplay` là biến DOM element dạng const.

Sửa:

```javascript
countDisplay.textContent = count;
```

Lỗi 4: `historyList.innerHTML = null` không nên dùng. Có thể dùng chuỗi rỗng.

Sửa:

```javascript
historyList.textContent = "";
```

Lỗi 5: Khi clear history, viết `item.remove` thiếu dấu ngoặc gọi hàm.

Sửa:

```javascript
item.remove();
```

Lỗi 6: Lưu `historyList.innerHTML` vào LocalStorage không tốt vì có thể lưu HTML không an toàn. Nên lưu mảng text hoặc render lại từ dữ liệu.

Sửa đơn giản:

```javascript
const history = Array.from(historyList.children).map(li => li.textContent);
localStorage.setItem("history", JSON.stringify(history));
```

Lỗi 7: Khi load từ LocalStorage, `count` lấy ra là string. Nên ép về number.

Sửa:

```javascript
count = Number(localStorage.getItem("count")) || 0;
```

Lỗi 8: Code chỉ load count nhưng không load lại history.

Sửa:

```javascript
const savedHistory = JSON.parse(localStorage.getItem("history") || "[]");
savedHistory.forEach(text => {
    const li = document.createElement("li");
    li.textContent = text;
    historyList.appendChild(li);
});
```

Bản sửa đầy đủ:

```javascript
const countDisplay = document.querySelector(".count");
const historyList = document.getElementById("history");
let count = Number(localStorage.getItem("count")) || 0;
countDisplay.textContent = count;

function addHistory(text) {
    const li = document.createElement("li");
    li.textContent = text;
    historyList.appendChild(li);
}

document.querySelector("#incrementBtn").addEventListener("click", function() {
    count++;
    countDisplay.textContent = count;
    addHistory("Count changed to " + count);
});

document.querySelector("#decrementBtn").addEventListener("click", function() {
    count--;
    countDisplay.textContent = count;
    addHistory("Count changed to " + count);
});

document.querySelector("#resetBtn").addEventListener("click", () => {
    count = 0;
    countDisplay.textContent = count;
    historyList.textContent = "";
});

historyList.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") e.target.remove();
});

document.querySelector("#clearHistory").addEventListener("click", () => {
    historyList.textContent = "";
});

window.addEventListener("beforeunload", () => {
    const history = Array.from(historyList.children).map(li => li.textContent);
    localStorage.setItem("count", String(count));
    localStorage.setItem("history", JSON.stringify(history));
});

window.addEventListener("load", () => {
    const savedHistory = JSON.parse(localStorage.getItem("history") || "[]");
    savedHistory.forEach(addHistory);
});
```

### Câu C2

Đề bài: Giải thích vì sao bind event lên 1000 elements riêng lẻ là bad practice. Refactor code tạo 1000 div bằng DocumentFragment.

Bài làm:

Bind event lên 1000 elements riêng lẻ là không tốt vì tốn bộ nhớ, khó quản lý và khi thêm/xóa phần tử động thì phải bind lại event. Event Delegation giải quyết bằng cách gắn một event listener lên phần tử cha, sau đó dùng `event.target` để biết người dùng click vào phần tử con nào. Cách này nhẹ hơn và phù hợp với danh sách có nhiều item.

Code ban đầu append vào DOM 1000 lần nên có thể gây reflow nhiều lần:

```javascript
for (let i = 0; i < 1000; i++) {
    const div = document.createElement("div");
    div.textContent = `Item ${i}`;
    document.body.appendChild(div);
}
```

Bản sửa dùng DocumentFragment:

```javascript
const fragment = document.createDocumentFragment();

for (let i = 0; i < 1000; i++) {
    const div = document.createElement("div");
    div.textContent = `Item ${i}`;
    fragment.appendChild(div);
}

document.body.appendChild(fragment);
```

`DocumentFragment` nằm ngoài DOM thật. Ta thêm 1000 div vào fragment trước, sau đó append fragment vào body một lần. Vì vậy browser chỉ cần cập nhật layout chính một lần, nhanh hơn append từng phần tử.

## PHẦN D - VIDEO THỰC HÀNH OBS

Đề bài: Quay video code-along Mini Todo App từ zero bằng DOM.

Bài làm: Đã chuẩn bị code mẫu trong folder `video_todo_app/`. Video OBS sẽ đặt trong thư mục `videos/` với tên `PBT09_TrinhQuangHuy_MaSV.mp4` hoặc dán link video vào đây.
