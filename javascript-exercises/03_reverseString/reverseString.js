const reverseString = function(str) {
    let result="";
    let l = str.length;
    let i;
    for(i=l-1; i>=0; i--){
        result = result + str.charAt(i);
    }
    return result;

};

module.exports = reverseString;
