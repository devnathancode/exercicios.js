const numbers = [1, -2, 4, 7, 0, 9, -4, -6];

const getPositiveNumbers = () => {
    let positiveNumber = 0;

    for(let i = 0; i < numbers.length; i++) {
        if(numbers[i] > 0) {
            positiveNumber++
        }
    }
    return positiveNumber;
}