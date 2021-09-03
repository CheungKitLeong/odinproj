const repeatString = function(str, num) {
    let i;
    let result = "";
    if(num<0){
        return "ERROR";
    }
    for(i=0; i<num; i++){
        result = result + str;
    }
    return result;
};

module.exports = repeatString;
