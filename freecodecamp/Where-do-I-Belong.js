function getIndexToIns(arr, num) {
  return arr
    .concat(num)
    .sort((a, b) => a - b)
    .indexOf(num);
}

getIndexToIns([40, 60], 50);



// Code Explanation
// We use method-chaining to invoke one method after another to solve the problem in a single line. First we create a new array with the contents of arr and num by using the concat() method
// Then we use sort() with the callback arrow function (a, b) => return a-b to sort the numbers in ascending order
// Lastly we return the position or index of num in the array with the indexOf() method
