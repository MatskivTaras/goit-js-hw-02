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

console.log(
    findLongestWord("Show longest words")
);