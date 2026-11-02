const getSmallestWord = (string) => {
    const words = string.trim().split(' ');
    let smallestWord = words[0];

    for(let i = 1; i < words.length; i++) {
        if (words[i].length < smallestWord.length) {
            smallestWord = words[i];
        }
    }
    return console.log(smallestWord);
}

getSmallestWord('agora vc vai ver gpt kk');
