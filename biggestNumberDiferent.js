let array = [12, 14, 77, 19, 3, 2];

const getBiggestNumber = () => {
    let biggestNumber = array[0];
    for(let i = 1; i < array.length; i++) {
        if(array[i]  > biggestNumber) {
            biggestNumber = array[i];
        }
    }
    return biggestNumber;
}