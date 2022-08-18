/**
 * @param {string[]} wordsDict
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function(wordsDict, word1, word2) {
    
    let a ;
    let b ;
    let min = 9999;
    
    for(let i =0; i<wordsDict.length; i++){
        if(wordsDict[i] === word1) {
            a = i
            if(a !== undefined && b !== undefined) min = Math.min(Math.abs(b-a), min)
        }
        if(wordsDict[i] === word2) {
            b = i
            if(a !== undefined && b !== undefined) min = Math.min(Math.abs(b-a), min)
        }
        
        
      
    }
    
    return min
};