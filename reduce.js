// O reduce() combina os elementos de um array em um único resultado.

const sales = [50, 100, 25, 75, 150];

const total = sales.reduce((accumulator, sale) => {
    return accumulator + sale;
}, 0);

console.log(total);
