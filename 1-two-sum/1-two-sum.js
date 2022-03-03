/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    let result;
    

    let map = new Map();
    
    nums.map((item) => {
        
        if(item === target-item) {
                 if(nums.indexOf(item , nums.indexOf(item) +1) !== -1) {
                     result = [nums.indexOf(item) , nums.indexOf(item,  nums.indexOf(item) +1)];
                         // console.log(item , nums.indexOf(item,  nums.indexOf(item) +1))
              
                     return result;
                 }
            
    
        }
        
        if(map.get(item) == target-item) {

        // console.log(nums.indexOf(target-item), nums.indexOf(item))
         result = [nums.indexOf(target-item), nums.indexOf(item)]
            return result;
        }
        
        // if(! (Math.abs(item) > Math.abs(target)) )
        map.set(target-item, item)
        
//   console.log(map)
        
    })
    


            
    
return result
};