const intersection = (arr1, arr2) => {
 
  let common = [];
   let hash = {};

  for (let i of arr1) {
    hash[i] = true;
  }

  console.log(hash)

  for (let j = 0; j < arr2.length; j++) {
    console.log(hash[arr2[j]]);
    if (hash[arr2[j]]) {
      common.push(arr2[j])
    }       
  }
  return common;
}

console.log(intersection([1, 2, 3, 4, 5], [0, 2, 4, 6, 8]));

const solutionTwo = (arr1, arr2) => {
  return arr1.filter((el) => arr2.includes(el))
}

console.log(solutionTwo([1, 2, 3, 4, 5], [0, 2, 4, 6, 8]));