/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 0638 ~ 
 */

// {
// 1:3,
// 2:2,
// 3:1,
// }

// const sortable = Object.entries(champ)
//   .sort(([, a], [, b]) => a - b)
//   .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

var topKFrequent = function(nums, k) {
    let obj = {};
    let result = [];
    
    nums.map(item => {
        obj[item] =(obj[item] +1 || 1)
    })
    
    let sorted = Object.entries(obj)
    .sort(([,a], [,b]) => b - a)

    
    // console.log(sorted)
    // console.log(aa)
    for(let i =0; i<k; i++){
        result.push(sorted[i][0])
    }
    
    // console.log(result)
    return result
};