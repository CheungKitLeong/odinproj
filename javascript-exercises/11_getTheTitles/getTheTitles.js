const getTheTitles = function(objarr) {
    let arr = [];
    let l = objarr.length;
    let i;
    for(i = 0; i < l; i++){
        arr[i] = objarr[i].title;
    }
    return arr;
};

module.exports = getTheTitles;
