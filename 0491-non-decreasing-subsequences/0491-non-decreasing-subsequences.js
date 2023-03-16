/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
    
    // nums = nums.sort((a,b) => a-b)
    // console.log(nums)
    
    const set = new Set()
    
    const dfs = (n, temp) => {
        // console.log(temp)
        if(n > nums.length-1) return;
        // console.log(n, temp)
        if(temp.length>= 2) set.add(JSON.stringify(temp.sort((a,b) => a-b)))
        for(let i = n+1; i<nums.length; i++){
            if(nums[i] < temp[temp.length-1]) continue;
            // console.log(nums[i-1], nums[i])
            
            dfs(i, [...temp , nums[i]])
        }
    }
    

       // dfs(0, nums[0].toString())
   
    
    for(let i =0; i<nums.length; i++){
        dfs(i, [nums[i]])
    }
     
//     console.log()
    return Array.from(set).map(item => JSON.parse(item))
    // return Array.from(set).map(item => item.split(" "))
    
};