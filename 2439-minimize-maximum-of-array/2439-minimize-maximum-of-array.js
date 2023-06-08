/**
 * @param {number[]} nums
 * @return {number}
 */
var minimizeArrayValue = function(nums) {
    
    let max = nums[0];
    let sum = nums[0];
    
    for(let i=1; i<nums.length; i++){
        sum = sum + nums[i];
        max = Math.ceil(Math.max(max, sum/(i+1)))
    }
    
    return max;

};