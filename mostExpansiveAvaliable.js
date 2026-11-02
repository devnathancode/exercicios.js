const products = [
    { name: 'Keyboard', price: 120, stock: 5 },
    { name: 'Mouse', price: 80, stock: 0 },
    { name: 'Monitor', price: 900, stock: 3 },
    { name: 'Headset', price: 250, stock: 0 },
    { name: 'Webcam', price: 350, stock: 2 }
];

const getMostExpansiveAvaliable = () => {
    let mostExpansive = products[0];

    for(let i = 1; i < products.length; i++) {
        if (products[i].price > mostExpansive.price && products[i].stock >= 1) {
            mostExpansive = products[i];
        }
    }
}

