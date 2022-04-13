function insertionSort(arr) {
    for(let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        let index = i;
        for(let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j];
            index = j;
        }
        arr[index] = currentVal;
    }
    return arr;
}

console.log(insertionSort([2, 11, 9, 76, 23, 45, 12, 87]))