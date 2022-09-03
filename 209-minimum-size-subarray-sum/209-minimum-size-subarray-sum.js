/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    
    if(nums.reduce((acc,cur) => acc + cur ,0) <target) return 0;
    
    let left = 0;
    let right = 0;
    
    let sum = 0;
    let minL = Number.MAX_SAFE_INTEGER;
    let count = 0;

    
    while(right< nums.length){
       sum = sum + nums[right]
        
        while(sum >= target){
            minL = Math.min(minL, right-left+1)
            sum = sum -nums[left]
            left++;
        }
        right++;
    }
    

    
    return minL
};