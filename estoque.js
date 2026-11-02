const products = [
    { name: 'Keyboard', price: 120, quantity: 1 },
    { name: 'Mouse', price: 80, quantity: 2 },
    { name: 'Headset', price: 150, quantity: 1 },
    { name: 'Monitor', price: 900, quantity: 0 }
];

function storage() {
    let estoque;
    for (let product of products) {
        estoque = product.quantity;
        if (estoque === 0) {
            alert('indisponivel')
        } else {
            alert(product);
        }
    }
}
