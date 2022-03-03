/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {

//     let result;
    

//     let map = new Map();
    
//     nums.map((item) => {
        
//         if(item === target-item) {
//                  if(nums.indexOf(item , nums.indexOf(item) +1) !== -1) {
//                      result = [nums.indexOf(item) , nums.indexOf(item,  nums.indexOf(item) +1)];
//                      return result;
//                  }
//         }
        
//         if(map.get(item) == target-item) {
//          result = [nums.indexOf(target-item), nums.indexOf(item)]
//         }
//         map.set(target-item, item)
        
//     })
    


            
    
// return result;


var twoSum = function(nums, target) {

    let result;
    

    let map = new Map();
    
    nums.map((item, index) => {
        
        if(map.get(item) == target-item) {
         result = [nums.indexOf(target-item), index]
        }
        map.set(target-item, item)
        
    })
    


            
    
return result
};