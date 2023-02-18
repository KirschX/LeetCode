/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    
    let digitObject = {
        2 : ['a','b','c'],
        3 : ['d','e','f'],
        4 : ['g','h','i'],
        5 : ['j','k','l'],
        6 : ['m','n','o'],
        7 : ['p','q','r','s'],
        8 : ['t','u','v'],
        9 : ['w','x','y','z']
    } 
    
    const map = new Map(Object.entries(digitObject))
    
    // console.log(map)
    let result = new Set()
    
    function trav (n, string) {
        if (n>= digits.length) return;
        let digit = digits[n]
        
        let edge = Array.from(map.get(digit))
        let temp = string;
        for(const item of edge) {
           
            temp = string + item
            if(n === digits.length-1) {
                let word = temp.split("").sort((a,b) => a-b).join("")
                result.add(word)
            }
            trav(n+1, temp)

        }
    }
    
    trav(0, "")
    
    return [...result]
    
    // for(let i =0; i<digits.length; i++){
    //     trav()
    // }
};