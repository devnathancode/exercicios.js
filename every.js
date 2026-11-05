// O every() verifica se todos os elementos atendem a uma condição e retorna true ou false.

const products = [
    { name: "Mouse", price: 50 },
    { name: "Teclado", price: 120 },
    { name: "Monitor", price: 800 }
];

const allProductsCostMoreThanThirty = products.every((product) => {
    return product.price > 30;
});

console.log(allProductsCostMoreThanThirty);
