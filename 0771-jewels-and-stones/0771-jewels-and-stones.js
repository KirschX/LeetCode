/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    
    const map = new Map();
    let count = 0;
    
    jewels.split("").map((char) => {
        map.set(char, 1)
    })
    
    stones.split("").map((char) => {
        if(map.has(char)) count ++;
    })
    
    return count
    
};