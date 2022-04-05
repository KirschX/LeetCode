/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    
    let obj = {
        'A' : 1,
        'B' : 2,
        'C' : 3,
        'D' : 4,
        'E' : 5,
        'F' : 6,
        'G' : 7,
        'H' : 8,
        'I' : 9,
        'J' : 10,
        'K' : 11,
        'L' : 12,
        'M' : 13,
        'N' : 14,
        'O' : 15,
        'P' : 16,
        'Q' : 17,
        'R' : 18,
        'S' : 19,
        'T' : 20,
        'U' : 21,
        'V' : 22,
        'W' : 23,
        'X' : 24,
        'Y' : 25,
        'Z' : 26
    }
    
    let arr = columnTitle.split("")
    
    let sum = 0;
    let length = arr.length
    arr.map((item,index) => {
        // console.log(item, length-1-index)
        sum = sum + (obj[item] * Math.pow(26, length-1-index))
    })
    
    // console.log(sum)
    
    // A 1
    // AA 26 + 1
    // AB 26 +2
    // BA 26(*2) + 1
    // ZY 
    // 26 * 28 = 756
    
    return sum
};