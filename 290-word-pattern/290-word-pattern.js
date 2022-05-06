/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    
    let sArr = s.split(" ")
    let map = new Map()
    
    if(pattern.length !== sArr.length) return false;
    
    for (let i=0; i<pattern.length; i++){
        if(!map.has(pattern[i])){
            
            if (Array.from(map.values()).includes(sArr[i])) return false;
            
            map.set(pattern[i], sArr[i])
        } else {
            if(map.get(pattern[i]) !== sArr[i]) return false;
        }
        
        // console.log(map)
    }
    
    return true;
};