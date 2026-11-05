// O sort() ordena os elementos do próprio array.

const numbers = [45, 10, 80, 5, 30, 100];

const ascending = [...numbers].sort((a, b) => a - b);
const descending = [...numbers].sort((a, b) => b - a);

console.log(ascending);
console.log(descending);
