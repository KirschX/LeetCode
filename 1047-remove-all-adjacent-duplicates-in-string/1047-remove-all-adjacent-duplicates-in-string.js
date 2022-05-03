/**
 * @param {string} s
 * @return {string}
 */
const removeDuplicates = s => {
    
    let sArr = s.split("")

    for(let i=1; i<sArr.length; i++){
        // console.log(i, sArr)
        let cur = sArr[i]
        let prev = sArr[i-1]
        
        if(prev === cur){
            sArr.splice(i-1, 2)
            i = i-2;
        }
        
        
    }
    
    return sArr.join("")
    
};