// O find() retorna o primeiro elemento que atende a uma condição.

const products = [
    { name: "Mouse", price: 50 },
    { name: "Teclado", price: 120 },
    { name: "Monitor", price: 800 }
];

const monitor = products.find((product) => {
    return product.name === "Monitor";
});

console.log(monitor);
