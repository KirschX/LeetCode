/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let map = new Map();
    

    for (let i = 0; i<s.length; i++) {
        if (s.length != t.length)
        return false
        
        if(!map.has(s[i])) {
              
            map.set(s[i], t[i])
          
        
        } else {
            if(t[i] !== map.get(s[i])){return false}
        }
                                    
 
    }

    
    return new Set([...map.values()]).size == map.size
};