/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
//     const set = new Set();
    
//     for(let i =0; i<nums.length; i++){
        
        
//         if(set.has(nums[i])) {
//             return true;
//         }
        
//         set.add(nums[i])
//         // console.log(set)
//     }
    
//     return false
    
    const set = [];
    
    for(let i =0; i<nums.length; i++){
        
        
        if(set.includes(nums[i])) {
            return true;
        }
        
        set.push(nums[i])
        // console.log(set)
    }
    
    return false
    
};