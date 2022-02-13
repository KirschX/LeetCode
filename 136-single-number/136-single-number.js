/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    
    let stack = [];
    
    for(let i =0; i<nums.length; i++) {
        if(stack.includes(nums[i])) {
            stack.splice(stack.indexOf(nums[i]), 1)
        } else {
            stack.push(nums[i])
        }
        
    }
    return stack[0]
};