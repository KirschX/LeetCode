/**
 * @param {number[]} nums
 * @return {number}
 */

        //     1 2 3 -10 5 / 1 2 3 -10 5
       //      1 3 5 -5  0
       //            -10 5     여태까지의 sum과 nums[i]를 더한 것중 큰것을 sum으로
    // 3 1 3 3 / 3 1 3 3


var maxSubarraySumCircular = function(nums) {
    let maxArr = [];
    maxArr[0] = nums[0];
    let minArr = [];
    minArr[0] = nums[0]
    
    let sum = nums[0];
    

    for(let i=1; i<nums.length; i++){
        maxArr[i] = Math.max(nums[i], maxArr[i-1] + nums[i]);
        minArr[i] = Math.min(nums[i], minArr[i-1] + nums[i])
        
        sum = sum + nums[i]
    }
 
        

//     console.log(sum)
    
//     console.log(sum - Math.min(...minArr))
    
//     console.log(maxArr, minArr)
   
    if( (sum - Math.min(...minArr)) <=0) return Math.max(...maxArr)
   return Math.max( (Math.max(...maxArr)), sum - Math.min(...minArr))

};


// 3 -1 2 -1 / 3 -1 2 -1
// 3  2 4  3   6  5 8
// 5 -3 5 / 5 -3 5
// 5  2 7  12

