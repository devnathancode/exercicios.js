let numbers = [10, 39, 40, 40, 56, 80];

const biggestNumberOfArray= () => {
    let biggestNumber = numbers[0];

    for(let i = 1; i < numbers.length; i++) {
        if(numbers[i] > biggestNumber) {
            biggestNumber = numbers[i];
        }
    }
    return biggestNumber
}