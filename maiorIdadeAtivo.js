const products = [
    { name: 'Keyboard', price: 120, quantity: 2 },
    { name: 'Mouse', price: 80, quantity: 3 },
    { name: 'Monitor', price: 900, quantity: 1 },
    { name: 'Headset', price: 250, quantity: 2 }
];

function valorTotalDeTudo() {
    let total = 0;

    for (let product of products) {
        total += product.price * product.quantity;
    }

    return total;
}