// PBT_07 - Câu A1: var / let / const

console.log("Đoạn 1: var hoisting");
console.log(x); // undefined
var x = 5;
console.log("Sau khi gán x =", x);

console.log("\nĐoạn 2: let và TDZ");
try {
    console.log(y);
    let y = 10;
} catch (error) {
    console.log(error.name + ": " + error.message);
}

console.log("\nĐoạn 3: const không cho gán lại");
try {
    const z = 15;
    z = 20;
    console.log(z);
} catch (error) {
    console.log(error.name + ": " + error.message);
}

console.log("\nĐoạn 4: const array vẫn sửa được phần tử bên trong");
const arr = [1, 2, 3];
arr.push(4);
console.log(arr);

console.log("\nĐoạn 5: let có block scope");
let a = 1;
{
    let a = 2;
    console.log("Trong block:", a);
}
console.log("Ngoài block:", a);
