function createCart() {
    let items = [];
    let discount = { type: "percent", value: 0, code: "" };

    function formatVnd(number) {
        return number.toLocaleString("vi-VN") + "đ";
    }

    function subtotal() {
        return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    }

    function discountAmount() {
        const total = subtotal();
        if (discount.type === "percent") {
            return total * discount.value;
        }
        return Math.min(discount.value, total);
    }

    return {
        addItem(product, quantity = 1) {
            if (!product || !product.id || quantity <= 0) {
                return "Lỗi: sản phẩm hoặc số lượng không hợp lệ";
            }

            const existingItem = items.find(item => item.id === product.id);
            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                items.push({ ...product, quantity });
            }
            return "Đã thêm sản phẩm";
        },

        removeItem(productId) {
            items = items.filter(item => item.id !== productId);
            return "Đã xóa sản phẩm";
        },

        updateQuantity(productId, newQuantity) {
            if (newQuantity <= 0) {
                return this.removeItem(productId);
            }

            const item = items.find(item => item.id === productId);
            if (!item) {
                return "Không tìm thấy sản phẩm";
            }

            item.quantity = newQuantity;
            return "Đã cập nhật số lượng";
        },

        getTotal() {
            return subtotal() - discountAmount();
        },

        applyDiscount(code) {
            const codes = {
                SALE10: { type: "percent", value: 0.1, code: "SALE10" },
                SALE20: { type: "percent", value: 0.2, code: "SALE20" },
                FREESHIP: { type: "fixed", value: 30000, code: "FREESHIP" }
            };

            if (!codes[code]) {
                return "Mã giảm giá không hợp lệ";
            }

            discount = codes[code];
            return `Đã áp dụng mã ${code}`;
        },

        printCart() {
            console.log("┌────────────────────────────────────────────────────────────┐");
            console.log("│ # │ Sản phẩm             │ SL │ Đơn giá       │ Tổng       │");
            console.log("├────────────────────────────────────────────────────────────┤");
            items.forEach((item, index) => {
                const line = `│ ${String(index + 1).padEnd(1)} │ ${item.name.padEnd(20)} │ ${String(item.quantity).padEnd(2)} │ ${formatVnd(item.price).padEnd(12)} │ ${formatVnd(item.price * item.quantity).padEnd(10)} │`;
                console.log(line);
            });
            console.log("├────────────────────────────────────────────────────────────┤");
            if (discount.code) {
                console.log(`│ Mã giảm giá: ${discount.code.padEnd(43)} │`);
                console.log(`│ Tiền giảm: ${formatVnd(discountAmount()).padEnd(45)} │`);
            }
            console.log(`│ Tổng cộng: ${formatVnd(this.getTotal()).padEnd(45)} │`);
            console.log("└────────────────────────────────────────────────────────────┘");
        },

        getItemCount() {
            return items.reduce((sum, item) => sum + item.quantity, 0);
        },

        clearCart() {
            items = [];
            discount = { type: "percent", value: 0, code: "" };
            return "Đã xóa toàn bộ giỏ hàng";
        }
    };
}

const cart = createCart();

cart.addItem({ id: 1, name: "iPhone 16", price: 25990000 }, 1);
cart.addItem({ id: 3, name: "AirPods Pro", price: 6990000 }, 2);
cart.addItem({ id: 1, name: "iPhone 16", price: 25990000 }, 1);

cart.printCart();

cart.applyDiscount("SALE10");
cart.printCart();

console.log("Số SP:", cart.getItemCount());
cart.removeItem(3);
console.log("Sau xóa:", cart.getItemCount());
cart.printCart();
