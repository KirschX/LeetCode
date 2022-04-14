/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let map = new Map();
    
    arr.map((item,index) => {
            map.set(item, map.get(item) + 1 || 1)
    })
    
    // console.log(map)
    
    let occArr = Array.from(map.values())
    let sOccArr = [...new Set(occArr)]
    
    return occArr.length == sOccArr.length 
};