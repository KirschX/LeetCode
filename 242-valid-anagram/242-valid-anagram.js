/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    let map = new Map()
    let map2 = new Map()
    
    if(s.length !== t.length) return false
    
    for(let i = 0; i<s.length; i++) {
        if(!map.has(s[i])) {
            map.set(s[i], 1)
        } else {
            map.set(s[i], map.get(s[i]) + 1)
        }
    }
    
    for(let i=0; i<t.length; i++){
        if(!map2.has(t[i])) {
            map2.set(t[i], 1)
        } else {
            map2.set(t[i], map2.get(t[i]) + 1)
        }
    }
    
    
    // console.log(map, map2)
    
    // if(map.size !== map2.size) return false
    
    for(i of map.keys()){
        if(map.get(i) !== map2.get(i)) return false
    }

    return true
};