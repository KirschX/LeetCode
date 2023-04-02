/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function(arr) {
    
    const string = arr.join("")
    
    const isUnique = (strA, strB) => {
        for(let i=0; i<strA.length; i++){
           
            let curA = strA[i]
             // console.log(strA,strB, strB?.includes(curA))
            if(strB?.includes(curA)) return false
        }
        
        return true;
    }
    
    // console.log(isUnique("bc", "aaa"))
    
    let max = ""
    const traverse = (n, temp) => {
        if(n > string.length) return;
//         if(temp.length > max.length) {
            
//         }
        
 
        
        for(let i=n; i<arr.length; i++){
            let cur = arr[i]
            if(new Set(cur).size !== cur.length) continue;
            if(!isUnique(temp,cur)) continue;
            if(temp.length + cur.length > max.length) {
                // console.log(temp,cur, isUnique(temp,cur))
                if(isUnique(temp, cur)) max = temp + cur
                else continue;
            }
           
          
            traverse(i+1, temp + cur)
        }
    }
    
    traverse(0, "")
    
    console.log(max)
    
    return max.length
};