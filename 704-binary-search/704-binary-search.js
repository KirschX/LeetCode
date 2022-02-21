/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {


    let count = 0;
    
    let start = 0;
    
    let end = nums.length-1;
    
    let mid = [];
    
    mid = Math.floor(nums.length / 2);
    
    if(nums.length <= 2) {
        if(nums.includes(target)){
            return nums.indexOf(target)
        }
        else return -1;
    }
    
    while(end-start !== 2){
        
           console.log(mid, nums[mid], end - start)
          
            if (nums[mid] > target) {
                end = mid;
                mid = Math.floor(end / 2)
           
            } else if (nums[mid] < target) {
                start = mid;
                mid = Math.floor((end + start) / 2)
          
            } else {
                
                return nums.indexOf(target)
            }
        
  
          }
    
    return nums.indexOf(target)

    
};