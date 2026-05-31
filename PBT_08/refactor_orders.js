const orders = [
    { id: 1, customer: "An", status: "completed", total: 250000 },
    { id: 2, customer: "Bình", status: "pending", total: 400000 },
    { id: 3, customer: "Chi", status: "completed", total: 90000 },
    { id: 4, customer: "Dũng", status: "completed", total: 700000 }
];

const processOrders = (orders) => orders
    .filter(({ status, total }) => status === "completed" && total > 100000)
    .map(({ id, customer, total }) => {
        const discount = total * 0.1;
        return { id, customer, total, discount, finalTotal: total - discount };
    })
    .sort((a, b) => b.finalTotal - a.finalTotal);

console.log(processOrders(orders));
