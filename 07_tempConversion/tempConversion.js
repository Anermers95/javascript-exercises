const convertToCelsius = function(a) {

    let result = (5 / 9) * (a - 32);

    result = Math.round(result * 10) / 10

    return result;


};

const convertToFahrenheit = function(a) {
    let result = a * (9 / 5) + 32

    result = Math.round(result * 10) / 10


    return result;

};

// Do not edit below this line
module.exports = {
    convertToCelsius,
    convertToFahrenheit
};