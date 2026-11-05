// O map() percorre um array e transforma cada elemento, retornando um novo array.

const products = [
    { name: "Mouse", price: 50 },
    { name: "Teclado", price: 120 },
    { name: "Monitor", price: 800 }
];

const productNames = products.map((product) => {
    return product.name;
});

console.log(productNames);

const doubledPrices = products.map((product) => {
    return product.price * 2;
});

console.log(doubledPrices);
