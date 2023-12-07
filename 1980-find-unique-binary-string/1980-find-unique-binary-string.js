/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function(nums) {
    const n = nums.length;
    
    let result = "";

    
    for(let i=0; i<n; i++){
        // console.log(nums[i])
        result = result + (nums[i][i] === "0" ? "1" : "0")
    }
    
    return result;
};