const products = [
    { name: 'Keyboard', price: 150, stock: 3 },
    { name: 'Mouse', price: 80, stock: 0 },
    { name: 'Monitor', price: 900, stock: 2 },
    { name: 'Headset', price: 250, stock: 5 }
];

const getTotalStockValue = () => {
    let calc = 0;

    let total = 0;

    for(let i = 0; i < products.length; i++) {
        calc = products[i].price * products[i].stock

        total += calc;
    }
    return total;
}