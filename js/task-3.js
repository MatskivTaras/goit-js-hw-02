function findLongestWord(string) {
    const wordsList = string.split(" ");
    let longestWord = "";
    for (let i = 0; i < wordsList.length; i++) {
        if (longestWord.length < wordsList[i].length) {
            longestWord = wordsList[i];
        };
    };
    return longestWord;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));

console.log(findLongestWord('Google do a roll'));

console.log(findLongestWord('May the force be with you'));