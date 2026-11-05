// O findIndex() retorna o índice do primeiro elemento que atende a uma condição.

const products = [
    { name: "Mouse", price: 50 },
    { name: "Teclado", price: 120 },
    { name: "Monitor", price: 800 }
];

const productIndex = products.findIndex((product) => {
    return product.price > 130;
});

console.log(productIndex);
