const calculateEngravingPrice = function (message, pricePerWord) {
    const wordsList = message.split(" ");
    return pricePerWord * wordsList.length;
};

console.log(
    calculateEngravingPrice("Мацьків Тарас Олегович", 25)
);