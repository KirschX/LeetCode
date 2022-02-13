/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    
//     let stack = [];
    
//     for(let i =0; i<nums.length; i++) {
//         if(stack.includes(nums[i])) {
//             stack.splice(stack.indexOf(nums[i]), 1)
//         } else {
//             stack.push(nums[i])
//         }
        
//     }
//     return stack[0]
    
    let obj = {};
    
    for(let i = 0; i<nums.length; i++) {
        
        if(`${nums[i]}` in obj) {
            delete obj[nums[i]];
        } else {
            obj[nums[i]] = 1;
        }
            // console.log(obj, nums[i])
    }
    
    return Object.keys(obj)[0]
};