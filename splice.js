// O splice() adiciona, remove ou substitui elementos no próprio array.

const numbers = [10, 20, 30, 40, 50];

const removedNumbers = numbers.splice(2, 1, 35);

console.log(removedNumbers);
console.log(numbers);
