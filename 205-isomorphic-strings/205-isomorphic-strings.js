/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let map = new Map();
    
    let sArr = s.split("")
    let tArr = t.split("")
    
    for (let i = 0; i<s.length; i++) {
        if (s.length != t.length)
        return false
        
        if(!map.has(sArr[i])) {
              
            map.set(sArr[i], tArr[i])
          
        
        } else {
            if(tArr[i] !== map.get(s[i])){return false}
        }
                                    
 
    }

    
    return new Set([...map.values()]).size == map.size
};