const sales = [50, 100, 25, 75, 150];

const total = sales.reduce((acc, sale) => {
    return acc + sale
}, 0);

console.log(total);

// carrinho de compras;

const cart = [
    { name: "Mouse", price: 80 },
    { name: "Keyboard", price: 150 },
    { name: "Monitor", price: 700 }
];

const valorTotal = cart.reduce((acc, product) => {
    return acc + product.price
}, 0);

console.log(valorTotal);

// somente produtos caros;

const products = [
    { name: "Mouse", price: 80 },
    { name: "Keyboard", price: 150 },
    { name: "Monitor", price: 700 },
    { name: "Headset", price: 200 },
    { name: "Webcam", price: 90 }
];

const productsExpansive = products.reduce((acc, product) => {
    if(product.price > 100) {
        return acc + product.price
    } else {
        return acc
    }
}, 0);

console.log(productsExpansive);