const orders = [
    { id: 1, status: 'completed', total: 450 },
    { id: 2, status: 'pending', total: 900 },
    { id: 3, status: 'completed', total: 700 },
    { id: 4, status: 'cancelled', total: 1200 },
    { id: 5, status: 'completed', total: 300 }
];

const getOrderCompleted = () => {
    let orderCompletedAndExpansive = orders[0];

    for(let i = 1; i < orders.length; i++) {
        if(orders[i].status === 'completed' && orders[i].total > orderCompletedAndExpansive.total) {
            orderCompletedAndExpansive = orders[i];
        }
    }
    return orderCompletedAndExpansive;
}