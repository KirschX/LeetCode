/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    nums.sort((a,b) => a-b)
    
//     console.log(nums)
    if(nums.length === 1) return nums[0] === 0 ? 1 : 0
    
    for(let i=0; i<nums.at(-1); i++){
        if(nums[i] !== i) return i
    }
    
    return nums.at(-1) +1
};