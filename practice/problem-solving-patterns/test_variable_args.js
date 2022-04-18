function areThereDuplicates(...args) {
    const argsArray = [...args];
    const argsObj = {};
    if(argsArray.length === 0) return false;
    for(let val of argsArray) {
        argsObj[val] = (argsObj[val] || 0) + 1;
    }
    for(let val in argsObj) {
        if(argsObj[val] > 1) return true;
    }
    return false;
}


console.log(areThereDuplicates('a', 'b', 'c', 'a'));
console.log(areThereDuplicates(1, 2, 3, 4, 5, 6, 7, 8, 9));
console.log(areThereDuplicates(1, 2, 3, 4, 5, 6, 7, 8, 9, 4));