const sumAll = function(a, b) {

    let result = 0;
    let temp = a;

    if (Array.isArray(a) || Array.isArray(b))
        return "ERROR"
    else if (typeof a == 'string' || typeof b == 'string')
        return "ERROR";
    else if (a < 0 || b < 0)
        return "ERROR";
    else {
        if (a > b) {
            temp = b;
            b = a;

        }
        for (let i = temp; i <= b; ++i) {
            result += i;
        }
    }

    return result;

};

// Do not edit below this line
module.exports = sumAll;