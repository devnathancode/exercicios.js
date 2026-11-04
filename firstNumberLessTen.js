// ele procura o primeiro que satisfaz a condiçao

const numbers = [4, 12, 7, 20, 3, 15];

const firstNumber = numbers.find(n => {
    return n < 10
});

console.log(firstNumber);