/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    
    let left = 0;
    let result = [];
    let map = new Map()
    let pMap = new Map()
    
    for (let i=0; i<p.length; i++){
       pMap.set(p[i], (pMap.get(p[i]) || 0) + 1)
    }
    pMap = Array.from(pMap).sort()
    
   // console.log(pMap)
    
  
    
    for (let right = 0; right<s.length; right++){
        map.set(s[right], (map.get(s[right]) || 0) + 1)
        
        if(right> p.length-1){
            map.set(s[left], map.get(s[left]) - 1)
            if(map.get(s[left]) === 0) map.delete(s[left])
            left++;
        }
        // console.log(map)
             let temp = Array.from(map).sort()
        if(JSON.stringify(temp) === JSON.stringify(pMap)) result.push(left)
        map = new Map(temp)
       
        
        // console.log(result)
    }
    
    return result
};