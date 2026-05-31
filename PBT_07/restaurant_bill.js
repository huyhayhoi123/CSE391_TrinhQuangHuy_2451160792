// PBT_07 - Câu C2: Tính hóa đơn nhà hàng

const foods = [
    { name: "Phở bò", price: 65000, quantity: 2 },
    { name: "Trà đá", price: 5000, quantity: 3 },
    { name: "Bún chả", price: 55000, quantity: 1 },
];

const useTip = true;
const dayOfWeek = "Wednesday";

function formatVND(value) {
    return value.toLocaleString("vi-VN") + "đ";
}

function calculateDiscountRate(total, day) {
    let rate = 0;

    if (total > 1000000) {
        rate = 0.15;
    } else if (total > 500000) {
        rate = 0.10;
    }

    if (day === "Wednesday") {
        rate += 0.05;
    }

    return rate;
}

function printBill(items, day, hasTip) {
    let total = 0;

    console.log("╔══════════════════════════════════════╗");
    console.log("║        HÓA ĐƠN NHÀ HÀNG             ║");
    console.log("╠══════════════════════════════════════╣");

    for (let i = 0; i < items.length; i++) {
        const itemTotal = items[i].price * items[i].quantity;
        total += itemTotal;
        console.log(`${i + 1}. ${items[i].name} x${items[i].quantity} @${formatVND(items[i].price)} = ${formatVND(itemTotal)}`);
    }

    const discountRate = calculateDiscountRate(total, day);
    const discount = total * discountRate;
    const afterDiscount = total - discount;
    const vat = afterDiscount * 0.08;
    const tip = hasTip ? afterDiscount * 0.05 : 0;
    const finalTotal = afterDiscount + vat + tip;

    console.log("╠══════════════════════════════════════╣");
    console.log("Tổng cộng:", formatVND(total));
    console.log(`Giảm giá (${discountRate * 100}%):`, formatVND(discount));
    console.log("VAT (8%):", formatVND(vat));
    console.log("Tip (5%):", formatVND(tip));
    console.log("╠══════════════════════════════════════╣");
    console.log("THANH TOÁN:", formatVND(finalTotal));
    console.log("╚══════════════════════════════════════╝");
}

printBill(foods, dayOfWeek, useTip);
