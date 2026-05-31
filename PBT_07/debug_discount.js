// PBT_07 - Câu C1: Bản sửa lỗi code giảm giá

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
