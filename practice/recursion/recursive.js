// Self written factorial function
const factorial = num => {
    if( num === 1 ) return 1;
    return num * factorial(num-1);
}

// Self solved power recursion function
function power(base, exp){
    if(exp === 0) return 1;
    return base * power(base, exp - 1);
}

// Self solved productOfArray function
function productOfArray(arr) {
    if(arr.length === 0) return 1;
    return arr[0] * productOfArray(arr.slice(1));
}

// Self solved recursiveRange function, return sum of all numbers from zero to num
function recursiveRange(num){
   if(num < 1) return 0;
   return num + recursiveRange(num - 1);
}

// Self solved recursive fib function
function fib(num){
  let arr = [1, 1];
  if(num < 1) return null;
  if(num > 0 && num < 3) return 1;
  
  function helper(arr) {
      if(num === arr.length) return arr[arr.length - 1];
      arr.push(arr[arr.length - 2] + arr[arr.length - 1])
      helper(arr);
  }
  
  helper(arr);
  return arr[arr.length-1];
}
console.log(fib(9));

console.log(factorial(5));
// console.log(factorial(6));
// console.log(factorial(10));

// RECURSION HELPER METHOD
const isOddValues = (arr) => {
    let result = [];

    function helper(helperInput) {
        if(helperInput.length === 0) {
            return;
        }

        if(helperInput[0] % 2 !== 0) {
            result.push(helperInput[0])
        }

        helper(helperInput.slice(1));
    }

    helper(arr);

    return result;
}

// PURE RECURSION       
const collectOddValues = (arr) => {
    let newArr = [];

    if(arr.length === 0) return newArr;
    if(arr[0] % 2 !== 0) newArr.push(arr[0]);

    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}

// console.log(isOddValues([1, 2, 3, 4, 5, 6, 7]));
// console.log(isOddValues([9, 11, 13, 15, 16, 18]));

// console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7]));
// console.log(collectOddValues([9, 11, 13, 15, 16, 18]));
