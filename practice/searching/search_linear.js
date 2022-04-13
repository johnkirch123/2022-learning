// Return index of value
const linearSearch = (arr, val) => {
    for(let i = 0; i < arr.length; i++) if(arr[i] === val) return i;
    return -1;
}

console.log(linearSearch([2, 55, 43, 12, 9], 9))