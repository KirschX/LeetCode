/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    
    let result = true;
    
    let map = new Map()
    
    magazine.split("").map(v => map.set(v, (map.get(v)|| 0) +1) )
    
    console.log(magazine.split(""))
    
    ransomNote.split("").map(v => {
        map.set(v, (map.get(v) || 0) -1)
        if(map.get(v)<0) {
            // console.log(map.get(v))
            result = false;
            return;
        }
    
    })
    
    return result
};