/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(Num) {

//     console.log(String.fromCharCode(Num +64))
    
//     console.log(parseInt(Num/26), Num%26)

    let arr = []
    let result =[];
    
    if(Num<=26) return String.fromCharCode(Num +64)
    
    while(Num>26){
        let quot = parseInt(Num/26)
        let rem = Num%26
        // console.log(quot, rem)
        if(rem === 0) {
            quot = quot -1
            rem = 26
        }
        arr.unshift(rem)
        if(quot<=26) arr.unshift(quot)
        Num = quot
    }
    
    // console.log(arr)
    
    arr.map((item,i) => {
        result.push(String.fromCharCode(item +64))
    })



    /// 777 = 26*26*1 + 26*3 1*23
    /// 701 = 26*26 *1 + 1*25
    
    return result.join("")

    
        
};