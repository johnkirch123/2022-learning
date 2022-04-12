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

const countUniqueValues = (arr) => {
  let i = 0;
  if (arr.length === 0) return 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[j] !== arr[i]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
};

// console.log(sumZero([-5, -3, -2, -1, 0, 1, 2, 4, 6, 8, 9]));
// console.log(sumZero([-5, -3, -2, -1, 0, 1, 4, 6, 8, 9]));
// console.log(sumZero([-5, -3, -2, -1, 0, 4, 6, 8, 9]));

console.log(
  countUniqueValues([0, 0, 1, 1, 1, 2, 3, 4, 4, 5, 6, 6, 7, 8, 9, 9, 9])
);

console.log(
  countUniqueValues([
    0, 0, 1, 1, 1, 2, 3, 4, 4, 5, 6, 6, 7, 8, 9, 9, 9, 11, 11, 14, 16, 18, 18,
    18, 20, 22, 24, 24, 26
  ])
);
