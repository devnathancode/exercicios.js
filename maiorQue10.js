const numbers = [4, 15, 8, 23, 7, 12, 3, 19];

// eu preciso saber quantos numeros sao maior que 10

const getItemPlusTen = () => {
    let count = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] >= 10) {
            count++
        } 
    }
    return count;
}