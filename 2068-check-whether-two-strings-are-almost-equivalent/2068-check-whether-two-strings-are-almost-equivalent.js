/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var checkAlmostEquivalent = function(word1, word2) {
    
    let result = true;
    
    const map = new Map()
    
    word1.split("").forEach((item) => {
        
        map.set(item, (map.get(item) || 0) + 1  )
    })
    
    word2.split("").forEach((item) => {
        map.set(item, (map.get(item) || 0) - 1  )
    })
    
    for (const [k,v] of map.entries()){
        if(v > 3 || v <-3) result = false
    }
    // console.log(map)
    
    return result
};