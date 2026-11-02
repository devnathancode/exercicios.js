const numbers = [4, 7, 2, 7, 9, 4, 3, 2];

const getReapeatedNumbers = () => {
    let repeatedNumber = [];

    for(let i = 0; i < numbers.length; i++) {

        for(let j = i + 1; j < numbers.length; j++) {
            if(numbers[i] === numbers[j]) {
                repeatedNumber.push(number[i]);
            }
        }
    }
    return repeatedNumber
}