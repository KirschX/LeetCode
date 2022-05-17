/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
 
    // let newNums = [...new Set(nums)].sort((a,b) => a-b)
    
    let newNums = nums.sort((a,b) => a-b )
    // console.log(newNums)
    
    return nums[nums.length - k]
};