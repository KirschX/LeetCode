/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 0638 ~ 0657
 */

var topKFrequent = function(nums, k) {
    let obj = {};
    let result = [];
    
    nums.map(item => {
        obj[item] =(obj[item] +1 || 1)
    })
    
    let sorted = Object.entries(obj)
    .sort((a,b) => b[1] - a[1])

    
    // console.log(sorted)

    for(let i =0; i<k; i++){
        result.push(sorted[i][0])
    }
    
    // console.log(result)
    return result
};