const palindromes = function (str) {
    str = str.replace(/[^a-zA-Z0-9]/g, "");
    str = str.toLowerCase();
    let len = str.length;
    let l = Math.floor(len / 2);
    let i;
    for(i = 0; i<l; i++){
        if(str.charAt(i) != str.charAt(len-1-i)){
            return false;
        }
    }
    return true;
};

module.exports = palindromes;
