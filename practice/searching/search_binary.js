// Self answer to binary search function
const binarySearch = (arr, val) => {
    let left = 0;
    let right = arr.length - 1;

    while(right >= left) {
        if(val === arr[Math.floor((right + left)/2)]) return Math.floor((right + left)/2);
        else if(val > arr[Math.floor((right + left)/2)]) left = Math.floor((right + left)/2) + 1;
        else right = Math.floor((right + left)/2) - 1;
    }
    return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,16 ,17, 18, 19], 15))
console.log(binarySearch([1, 2, 3, 7, 8, 9, 11, 12, 15,17, 19, 25, 26, 29, 31, 33, 34, 35,42, 44, 46, 47, 48,53], 53))
console.log(binarySearch([1, 2, 3, 7, 8, 9, 11, 12, 15,17, 19, 25, 26, 29, 31, 33, 34, 35,42, 44, 46, 47, 48,53], 3))
console.log(binarySearch([1, 2, 3, 7, 8, 9, 11, 12, 15,17, 19, 25, 26, 29, 31, 33, 34, 35,42, 44, 46, 47, 48,53], 100))

// Coding answer from class for binary search
function bSearch(arr, elem) {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);

    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elem ? middle : -1;
}

console.log(bSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,16 ,17, 18, 19], 15))
console.log(bSearch([1, 2, 3, 7, 8, 9, 11, 12, 15,17, 19, 25, 26, 29, 31, 33, 34, 35,42, 44, 46, 47, 48,53], 53))
console.log(bSearch([1, 2, 3, 7, 8, 9, 11, 12, 15,17, 19, 25, 26, 29, 31, 33, 34, 35,42, 44, 46, 47, 48,53], 3))
console.log(bSearch([1, 2, 3, 7, 8, 9, 11, 12, 15,17, 19, 25, 26, 29, 31, 33, 34, 35,42, 44, 46, 47, 48,53], 30))