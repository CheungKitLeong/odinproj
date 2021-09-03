const sumAll = function(a, b) {
    if(!Number.isInteger(a) || !Number.isInteger(b) || (a < 0) || (b < 0)){
        return "ERROR"
    }
    return (a + b) * (Math.abs(b - a) + 1) / 2;
};

module.exports = sumAll;
