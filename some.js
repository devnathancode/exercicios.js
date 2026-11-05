// O some() verifica se pelo menos um elemento atende a uma condição e retorna true ou false.

const products = [
    { name: "Mouse", stock: 10 },
    { name: "Teclado", stock: 0 },
    { name: "Monitor", stock: 5 }
];

const hasProductOutOfStock = products.some((product) => {
    return product.stock === 0;
});

console.log(hasProductOutOfStock);
