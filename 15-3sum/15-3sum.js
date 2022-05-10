/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if(nums.length <3) return [];
    
    nums.sort((a,b) => b-a)
    let result = [];
    
    // console.log(nums)
    
    
    for(let i=0; i<nums.length-2; i++){
        if(nums[i] === nums[i-1]) continue;
        let lo = i+1;
        let hi = nums.length-1;
        
        while(lo < hi){
            let sum = nums[i] + nums[lo] + nums[hi];
            
            if(sum === 0) {
                // console.log(i, lo,hi)
                while( lo < hi && nums[lo] === nums[lo+1]) lo++;
                while(  lo < hi && nums[hi] === nums[hi-1]) hi--;
                result.push([nums[i],nums[lo],nums[hi]])
                lo++;
                hi--;
                
            }
            
            if(sum > 0){
                lo++;
            }
            
            if(sum < 0){
                hi--;
            }
            
            // console.log(lo,hi)
        }
        
    } 
    // console.log(result)
    
    return result;
    
};