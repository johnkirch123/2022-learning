const sumZero = (arr) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) return [arr[left], arr[right]];
    else if (sum < 0) left++;
    else right--;
  }
};

console.log(sumZero([-5, -3, -2, -1, 0, 1, 2, 4, 6, 8, 9]));
console.log(sumZero([-5, -3, -2, -1, 0, 1, 4, 6, 8, 9]));
console.log(sumZero([-5, -3, -2, -1, 0, 4, 6, 8, 9]));
