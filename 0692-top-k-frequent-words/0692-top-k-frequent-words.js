/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    
    const map = new Map();
    
    words.forEach((item) => {
        map.set(item, (map.get(item) || 0) + 1 )
    })
    
    // console.log(map)
    
    const collator = new Intl.Collator('en', { numeric: true, sensitivity: 'base' })
    
    const result = Array.from(map.entries()).sort((a,b) => {
        if(a[1] === b[1]) return collator.compare(a[0],b[0])
        else return b[1] - a[1]
    })
    
    return result.slice(0,k).map(([k,v]) => k)
};

