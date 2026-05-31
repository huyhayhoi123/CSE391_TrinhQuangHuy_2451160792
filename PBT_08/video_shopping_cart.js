function createCart() {
    let items = [];

    return {
        addItem(name, price) {
            items.push({ name, price });
        },

        removeItem(name) {
            items = items.filter(item => item.name !== name);
        },

        getTotal() {
            return items.reduce((sum, item) => sum + item.price, 0);
        },

        printCart() {
            console.log("=== GIỎ HÀNG ===");
            items.forEach((item, index) => {
                console.log(`${index + 1}. ${item.name}: ${item.price.toLocaleString("vi-VN")}đ`);
            });
            console.log("Tổng:", this.getTotal().toLocaleString("vi-VN") + "đ");
        }
    };
}

const cart = createCart();
cart.addItem("iPhone 16", 25990000);
cart.addItem("AirPods Pro", 6990000);
cart.addItem("Ốp lưng", 300000);
cart.printCart();

cart.removeItem("Ốp lưng");
cart.printCart();

// console.log(cart.items); // undefined, vì items là biến private trong closure
