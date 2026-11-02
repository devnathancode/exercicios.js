const product = {
    name: 'Keyboard',
    price: 120,
    quantity: 6
};

function totalDaCompra() {
    let calculo = product.price * product.quantity;
    let desconto = 0.10;
    let descontoAplicado = calculo * desconto;
    let total = calculo - descontoAplicado
    if (calculo >= 500) {
        alert('o total com desconto e de: ' + total);
    } else {
        alert('voce n ganhara desconto!')
    }
}