// O filter() retorna um novo array apenas com os elementos que atendem a uma condição.

const products = [
    { name: "Mouse", price: 50 },
    { name: "Teclado", price: 120 },
    { name: "Monitor", price: 800 },
    { name: "Headset", price: 200 }
];

const productsAboveOneHundred = products.filter((product) => {
    return product.price > 100;
});

console.log(productsAboveOneHundred);

const namesOfExpensiveProducts = products
    .filter((product) => product.price > 100)
    .map((product) => product.name);

console.log(namesOfExpensiveProducts);
