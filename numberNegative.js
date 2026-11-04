// verifica se pelo menos um satisfaz a condiçao e retorna true/false;

const numbers = [4, 12, 7, 20, 3, -15];

const firstNumberNegative = (numbers.some((n) => n < 0));

console.log(firstNumberNegative);