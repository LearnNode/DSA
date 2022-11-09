/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
let res = []

for (let i = 0; i < nums.length; i++){
    for(let j =1; j<nums.length; j++){
        if (nums[i]+nums[i+j] === target){
            res.push(i, i + j)
        }
    }

} 
    return res;
};
