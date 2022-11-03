const findTheMissingLetter = (str) => {
  let res = [];
  let alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 
    'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 
    'p', 'q', 'r', 's', 't', 'u', 
    'v', 'w', 'x', 'y', 'z'];
  str = str.split('');
  let hash = {};
  for (let i of str) {
    hash[i] = true
  }

  for(let j = 0; j < alpha.length; j++) {
    if (!hash[alpha[j]]) {
      res.push(alpha[j])
    };
  }
  return res;
};

console.log(findTheMissingLetter('the uick brown box jumps over a lazy dog'));

const solutionTwo = (str) => {
  let alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 
    'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 
    'p', 'q', 'r', 's', 't', 'u', 
    'v', 'w', 'x', 'y', 'z'];

  str = str.split('');

  return alpha.filter((i) => !str.includes(i));
}

console.log('first', solutionTwo('the quick brown box jumps over a lazy dog'));