// PBT_07 - Bài B2: Xử lý dữ liệu sinh viên

const students = [
    { name: "An", math: 8, physics: 7, cs: 9, gender: "M" },
    { name: "Bình", math: 6, physics: 9, cs: 7, gender: "F" },
    { name: "Chi", math: 9, physics: 6, cs: 8, gender: "F" },
    { name: "Dũng", math: 5, physics: 5, cs: 6, gender: "M" },
    { name: "Em", math: 10, physics: 8, cs: 9, gender: "F" },
    { name: "Phong", math: 3, physics: 4, cs: 5, gender: "M" },
    { name: "Giang", math: 7, physics: 7, cs: 7, gender: "F" },
    { name: "Huy", math: 4, physics: 6, cs: 3, gender: "M" },
];

function tinhDiemTrungBinh(student) {
    return student.math * 0.4 + student.physics * 0.3 + student.cs * 0.3;
}

function xepLoai(avg) {
    if (avg >= 8.0) return "Giỏi";
    if (avg >= 6.5) return "Khá";
    if (avg >= 5.0) return "Trung bình";
    return "Yếu";
}

const results = [];
const counts = { "Giỏi": 0, "Khá": 0, "Trung bình": 0, "Yếu": 0 };
let highest = null;
let lowest = null;
let totalMath = 0;
let totalPhysics = 0;
let totalCs = 0;
const genderStats = {
    M: { total: 0, count: 0 },
    F: { total: 0, count: 0 },
};

for (let i = 0; i < students.length; i++) {
    const student = students[i];
    const avg = tinhDiemTrungBinh(student);
    const rank = xepLoai(avg);

    results.push({ name: student.name, avg, rank });
    counts[rank]++;

    if (highest === null || avg > highest.avg) {
        highest = { name: student.name, avg };
    }

    if (lowest === null || avg < lowest.avg) {
        lowest = { name: student.name, avg };
    }

    totalMath += student.math;
    totalPhysics += student.physics;
    totalCs += student.cs;

    genderStats[student.gender].total += avg;
    genderStats[student.gender].count++;
}

console.log("| STT | Tên    | TB   | Xếp loại    |");
console.log("|-----|--------|------|-------------|");
for (let i = 0; i < results.length; i++) {
    const stt = String(i + 1).padEnd(3, " ");
    const name = results[i].name.padEnd(6, " ");
    const avg = results[i].avg.toFixed(1).padEnd(4, " ");
    const rank = results[i].rank.padEnd(11, " ");
    console.log(`| ${stt} | ${name} | ${avg} | ${rank} |`);
}

console.log("\nSố sinh viên theo xếp loại:");
for (const rank in counts) {
    console.log(`${rank}: ${counts[rank]}`);
}

console.log(`\nSinh viên cao nhất: ${highest.name} - ${highest.avg.toFixed(1)}`);
console.log(`Sinh viên thấp nhất: ${lowest.name} - ${lowest.avg.toFixed(1)}`);

console.log("\nĐiểm TB toàn lớp theo môn:");
console.log("Toán:", (totalMath / students.length).toFixed(2));
console.log("Vật lý:", (totalPhysics / students.length).toFixed(2));
console.log("Tin học:", (totalCs / students.length).toFixed(2));

console.log("\nĐiểm TB theo giới tính:");
for (const gender in genderStats) {
    const avg = genderStats[gender].total / genderStats[gender].count;
    console.log(`${gender}: ${avg.toFixed(2)}`);
}
