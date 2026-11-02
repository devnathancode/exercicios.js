const orders = [
    { id: 1, customer: 'Lucas', total: 120, status: 'pending' },
    { id: 2, customer: 'Ana', total: 450, status: 'completed' },
    { id: 3, customer: 'Pedro', total: 80, status: 'pending' },
    { id: 4, customer: 'Maria', total: 700, status: 'completed' }
];

// Retorne o pedido com o maior total entre os pedidos completed.

function largestOrder() {
    let largestOrder;

    for (let order of orders) {
        if (order.status === 'completed' && order.total > largestOrder.total ) {
            largestOrder = order
        }
    }
    return largestOrder;
}