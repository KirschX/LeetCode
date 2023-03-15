/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    const sMap = new Map()
    let tMap = new Map()
    s.split("").map((item)=> {
        sMap.set(item, (sMap.get(item)|| 0) + 1)
    })
    tMap = sMap
    t.split("").map((item) => {
        tMap.set(item,(tMap.get(item)|| 0) - 1)
    })
    
    // console.log(sMap)
    // console.log(tMap)
    
    let count = 0;
    Array.from(tMap.values()).map((item) => {
        if(item <0 ) {
            count = count + -item
        }
    })
    
    return count
    
    // leetcode
    // practice
};