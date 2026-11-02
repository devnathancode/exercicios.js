const cart = [
    { name: 'Keyboard', price: 120, quantity: 1 },
    { name: 'Mouse', price: 80, quantity: 2 },
    { name: 'Headset', price: 150, quantity: 1 }
];

function maiorGasto() {
    let maiorGasto = 0;
    let total = 0;

    for (let item of cart) {
        total = item.quantity * item.price
        if (total > maiorGasto) {
            maiorGasto = total;
        }
    }
    return maiorGasto;
}