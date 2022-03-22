/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {

//     map {
//         1 : {freq : 2, index : [0 , 4]},
//         2 : {freq : 2, index : [1 , 2]},
//         3 : {freq : 1, index : [3]}
//     }
    
    let map = new Map();
    
    let max = 1;
    nums.map((item, i) => {
        if(!map.get(item)) {
            map.set(item, {freq : 1, index : [i]})
        }
        else {
            map.get(item).index.push(i)
            map.set(item, {freq : map.get(item).freq+1, index : map.get(item).index})
            
        }
        if(map.get(item).freq > max) max = map.get(item).freq
    })
   
    let result = [];
  
    for (let i of map) {
        if(i[1].freq === max) {
            let length =  i[1].index[i[1].index.length-1] - i[1].index[0]
            result.push(length + 1)
        }
   
    }
    
//     console.log(map)
//     console.log(result)
    
    result = Math.min(...result)
    
    return result


    
};