// Non working concept with adding both if they match
// function merge(arr1, arr2) {
//     let result = [];
//     let i = 0;
//     let j = 0;
//     while(i < arr1.length && j < arr2.length) {
//         if(arr2[j] === arr1[i]) {
//             result.push(arr2[j]);
//             result.push(arr1[i]);
//             i++;
//             j++;
//         } else if(arr1[i] < arr2[j]) {
//             result.push(arr1[i]);
//             i++;
//         } else if(arr2[j] < arr1[i]) {
//             result.push(arr2[j]);
//             j++;
//         }
//         while(i < arr1.length) {
//             result.push(arr1[i]);
//             i++;
//         }
//         while(j < arr2.length) {
//             result.push(arr2[j]);
//             j++;
//         }
//     }
//     return result;
// }

// Something is still off with this
function merge(arr1, arr2) {
    let result = [];
    let i = 0;
    let j = 0;
    // console.log(arr1, arr2);
    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
        while(i < arr1.length) {
            result.push(arr1[i]);
            i++;
        }
        while(j < arr2.length) {
            result.push(arr2[j]);
            j++;
        }
    }
    return result;
}

function mergeSort(arr) {
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

// console.log(mergeSort([10, 32, 73, 65]));
console.log(mergeSort([5, 3, 7, 4, 1, 9, 2]));
// console.log(merge([1, 2, 5, 6, 9], [3, 4, 7, 8, 10]));
// console.log(merge([1, 2, 5, 6, 9], [3, 4, 7, 8, 10, 11, 12, 14]));
// console.log(merge([1, 2, 3, 3, 4, 5, 6, 9], [3, 4, 5, 5, 6, 7, 8, 10, 11, 12, 14]));