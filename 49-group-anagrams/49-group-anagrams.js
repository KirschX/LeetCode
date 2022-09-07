/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

    let result = []
    let map = new Map()
    
    strs.map(item => {
        let sorted = [...item].sort().join("")
        map.set(sorted, [...(map.get(sorted) || []), item])
    })
    
    
    return Array.from(map.values())
    
//     for (let arr of map.values()){
//         result.push(arr)
//     }

//     return result
};