let numbers = [1, 2, 25, 1, 4, 67];
0
const twoSum = () => {
    let target = 26;
    let calc

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            calc = numbers[i] + numbers[j];
            if (calc === target) {
                return [i, j];
            }
        }
    }
}