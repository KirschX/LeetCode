/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    
    function divide(str) {
        let sub = [str]
        for(let i=0; i<Math.ceil(str.length/2); i++){
            let divider = str.slice(0,i+1)

            let result = true;
            for(let j=0; j<str.length; j += divider.length){
                let temp = str.slice(j, j + divider.length)
                if(divider !== temp) result = false;
            }
            if(result) sub.push(divider)
        }
    
        // console.log(sub)
    return sub
    }
    
    
    
    let aa = divide(str1).sort((a,b) => a.length-b.length)
    
    let bb = divide(str2).sort((a,b) => a.length-b.length)
    console.log(aa,bb)
    let result = aa.filter(v => bb.includes(v))
    

    
    return result.sort((a,b) => b.length - a.length)[0] || ""

};