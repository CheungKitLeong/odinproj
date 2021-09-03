const caesar = function(str, shift) {
    if (shift < 0){
        shift = 26 + shift;
    }
    shift = shift % 26;
    let l = str.length;
    let result = "";
    let i, newcode;
    for(i=0; i<l; i++){
        newcode = str.charCodeAt(i);
        if(newcode >=65 && newcode <=90){
            newcode = ((newcode - 65 + shift) % 26) + 65;
        }else if (newcode >= 97 && newcode <= 122){
            newcode = ((newcode - 97 + shift) % 26) + 97;
        }
        result = result + String.fromCharCode(newcode);
    }
    return result;
};

module.exports = caesar;
