const orders = [
    { id: 1, product: 'Keyboard', price: 120, quantity: 2 },
    { id: 2, product: 'Mouse', price: 80, quantity: 4 },
    { id: 3, product: 'Monitor', price: 900, quantity: 1 },
    { id: 4, product: 'Headset', price: 150, quantity: 3 }
];

function maiorPedido() {
   let total = 0;
   let maiorPedido = 0;
   let maiorTotal = 0;

   for (let order of orders) {
    total = order.quantity * order.price;

    if (total > maiorTotal) {
        maiorTotal = total
        maiorPedido = order
    }
   }
   return maiorPedido
}