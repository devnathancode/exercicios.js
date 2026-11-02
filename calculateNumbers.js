const numbers = [5, 8, 2, 10, 3];

const calculateNumber = () => {
    let total = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total
}