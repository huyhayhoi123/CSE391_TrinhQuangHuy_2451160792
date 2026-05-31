// PBT_07 - Code mẫu để quay video OBS

console.log("Demo var hoisting");
console.log(x);
var x = 5;

console.log("Demo const array");
const arr = [1, 2];
arr.push(3);
console.log(arr);

console.log("Type coercion");
console.log("5" + 3);
console.log("5" - 3);
console.log(true + true);
console.log([] + {});

console.log("== vs ===");
console.log(5 == "5");
console.log(5 === "5");

function calculate(a, op, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        return "Lỗi: Input không phải số";
    }

    if (op === "/" && b === 0) {
        return "Lỗi: Không thể chia cho 0";
    }

    if (op === "+") return a + b;
    if (op === "-") return a - b;
    if (op === "*") return a * b;
    if (op === "/") return a / b;

    return "Lỗi: Operator không hợp lệ";
}

console.log(calculate(10, "+", 5));
console.log(calculate(10, "/", 0));
