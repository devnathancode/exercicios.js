// ele percorre um elemento mas o indice ('Number') e o proprio elemento;

const numbers = [4, 12, 7, 20, 3, 15];

let numbersMaiorDez = [];

for(const number of numbers) {
    if(number > 10) {
        numbersMaiorDez.push(number);
    }
}

console.log(numbersMaiorDez);