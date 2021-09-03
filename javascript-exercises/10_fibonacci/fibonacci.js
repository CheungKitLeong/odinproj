const fibonacci = function(num) {
    if(!Number.isInteger(num)){
        return 1;
    }
    if(num<=0){
        return "OOPS";
    }
    if(num <= 2){
        return 1;
    }
    return fibonacci(num-1) + fibonacci(num - 2);
};

module.exports = fibonacci;
