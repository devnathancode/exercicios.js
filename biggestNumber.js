const numbers = [12, 5, 27, 9, 31, 18, 4];

const getBiggestNumber = () => {
    let biggestNumber = numbers[i];

    for(let i = 1; i < numbers.length; i++) {
        if (numbers[i] > biggestNumber){
            biggestNumber = numbers[i];
        }
    }
    return biggestNumber;
}