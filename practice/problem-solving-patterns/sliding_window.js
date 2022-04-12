const maxSubArraySum = (arr, num) => {
  if (arr.length < num) return null;
  let temp = arr[0];
  let firstNum = arr[0];
  for (let i = 1; i < num; i++) {
    temp += arr[i];
  }
  let max = temp;
  for (let i = 1; i < arr.length - num + 1; i++) {
    temp = temp - firstNum + arr[i + num - 1];
    console.log(`temp: ${temp}`);
    if (temp > max) max = temp;
    console.log(`max: ${max}`);
    firstNum = arr[i];
  }
  return max;
};

// 168
console.log(
  maxSubArraySum(
    [
      5, 7, 3, 4, 5, 8, 9, 9, 7, 4, 23, 6, 4, 6, 6, 22, 43, 61, 42, 4, 6, 8, 23,
      34, 4, 43, 21, 13, 53, 2, 22, 23, 11, 21, 14, 8, 45, 23, 32
    ],
    4
  )
);
