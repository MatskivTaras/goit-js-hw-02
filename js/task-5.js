const checkForSpam = function (message) {
    const res = message.toLowerCase();
    return ( (res.includes("spam")) || (res.includes("sale")) ) ? true : false;    
};

console.log(checkForSpam('Latest technology news'));

console.log(checkForSpam('JavaScript weekly newsletter'));

console.log(checkForSpam('Get best sale offers now!'));

console.log(checkForSpam('[SPAM] How to earn fast money?'));