// const changeCase = (str) => {
//   return [...str]
//     .map((c) => (c == c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()))
//     .join('');
// };

// console.log(changeCase('HelloWorld'));

function mergeArrays(arr1, arr2) {
  console.log([...new Set([...arr1, ...arr2])].sort((a, b) => a - b));
}

mergeArrays([1, 2, 3, 3, 4, 5], [1, 3, 5, 6, 7, 7, 8]);
