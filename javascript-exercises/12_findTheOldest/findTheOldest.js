const findTheOldest = function(objarr) {
    let l = objarr.length;
    let d = new Date();
    let yr = d.getFullYear();
    let maxAge = 0;
    let maxIndex;
    let i, age;
    for(i=0; i<l; i++){
        if(objarr[i].yearOfDeath == undefined){
            age = yr - objarr[i].yearOfBirth;
            if(maxAge < age){
                maxAge = age;
                maxIndex = i;
            } 
        }else{
            age = objarr[i].yearOfDeath - objarr[i].yearOfBirth;
            if(maxAge < age){
                maxAge = age;
                maxIndex = i;
            } 
        }
    }
    return objarr[maxIndex];
};

module.exports = findTheOldest;
