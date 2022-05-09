/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if(nums.length < 3) return [];

    nums.sort((a,b) => b-a);
    
    let result = [];
    
    console.log(nums)
    
    for(let i= 0; i<nums.length-2; i++){
        if (nums[i] === nums[i - 1]) continue;
        
        
        let low = i+1;
        let high = nums.length -1;

        
        while(low < high){
            let sum = nums[i] + nums[low] + nums[high];
             // console.log(low,high)
            if(sum >0) {
                 while(low < high && nums[low] === nums[low + 1]) low++;
                low++;
            }
            
            if(sum <0) {
                while(low < high && nums[high] === nums[high - 1]) high--;
                high--;
                
            }
            
            if(sum === 0) {
                // console.log("hi", low,high)
                result.push([nums[i], nums[low], nums[high]]);
                while(low < high && nums[low] === nums[low + 1]) low++;
                while(low < high && nums[high] === nums[high - 1]) high--;
                low++;
                high--;
                

            }
            // console.log(low,high)
            
            
        }
       
    }
    console.log(result)
    
    
    return result;
    
};