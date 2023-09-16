const removeFromArray = function(a, ...args) {
    return a.filter(item => !args.includes(item))
};

// Do not edit below this line
module.exports = removeFromArray;