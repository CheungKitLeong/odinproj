const removeFromArray = function(arr) {
    const l = arguments.length;
    let i, index;
    for(i=1; i<l; i++){
        index = arr.indexOf(arguments[i]);
        if(index >= 0){
            arr.splice(index, 1);
        }
    }
    return arr;
};

module.exports = removeFromArray;
