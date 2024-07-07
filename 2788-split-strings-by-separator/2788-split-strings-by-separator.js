/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function(words, separator) {
    
    const result = [];
    
    for(let i=0; i<words.length; i++){
        const target = words[i].split(separator).filter(item => item !== "");
     
        result.push(...target)
    }
    
    return result;
};