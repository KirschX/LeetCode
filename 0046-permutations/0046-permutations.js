/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    
    let result = []
    
    const dfs = (n, pos, arr) => {
        if(n > nums.length-1) return;
        
        for(let i = 0; i<nums.length; i++){
            if(pos.includes(i)) continue;
            dfs(i, [...pos, i], [...arr, nums[i]])
        }
        
        if(arr.length === nums.length) result.push(arr)
    }
    
  for(let i =0; i<nums.length; i++){
        dfs(i, [i], [nums[i]])
  }
    
    return result
};