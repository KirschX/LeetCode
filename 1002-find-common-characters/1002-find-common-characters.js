/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    
    let result = [];
    let first = [...words[0]]
    console.log(first)
    
    
    for(const char of first){
        if(words.every(c => c.includes(char))){
            result.push(char);
            words = words.map(item => item.replace(char, ""))
        }
    }

    return result
    
};