const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	let l = arr.length;
  let i;
  let result = 0;
  for(i =0; i<l; i++){
    result = arr[i] + result;
  }
  return result;
};

const multiply = function(arr) {
  let l = arr.length;
  let i;
  let result = 1;
  for(i=0; i<l; i++){
    result = arr[i] * result;
  }
  return result;
};

const power = function(a, b) {
  return Math.pow(a, b);
};

const factorial = function(a) {
  if(a == 1 || a == 0){
    return 1;
  }
	return a * factorial(a-1);
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
