// ele filtra todos que satisfazem a condiçao;

const numbers = [4, 12, 7, 20, 3, 15];

let numbersMaiorDez = numbers.filter((n) => {
  return n > 10;
});

console.log(numbersMaiorDez);
