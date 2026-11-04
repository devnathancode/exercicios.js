// ele percorre o array e transforma os elementos ja em um novo array;

const prices = [25, 40, 10, 60];

const doublePrices = prices.map((n) => n * 2);

console.log(doublePrices);

// retornar apenas o nome dos produtos;

const products = [
  { name: 'Keyboard', price: 150 },
  { name: 'Mouse', price: 80 },
  { name: 'Monitor', price: 900 },
];

const JustName = products.map((n) => {
  return n.name;
});

console.log(JustName);