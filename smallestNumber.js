const numbers = [1, 4, 0, 6, 10, 3, 6];

const getSmallestWord = () => {
    let smallestNumber = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < smallestWord) {
            smallestWord = numbers[i];
        }
    }
    return smallestWord;
}