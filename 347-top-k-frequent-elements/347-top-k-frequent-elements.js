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
    .sort((a,b) => a[1] - b[1])
    
    
    while(result.length !== k) {
        result.push(sorted.pop()[0])
    }
    
    
    // console.log(obj)
    // console.log(sorted)
    

    return result
};


// 가장 많은수를 뽑는다
// 배열에서 제거
// 가장많은수를 뽑는다
