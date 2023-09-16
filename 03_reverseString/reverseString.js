const reverseString = function(word) {


    if (word == "")
        return "";

    let result = word.split("")
    result = result.reverse();
    result = result.join("");

    return result;

};

// Do not edit below this line
module.exports = reverseString;