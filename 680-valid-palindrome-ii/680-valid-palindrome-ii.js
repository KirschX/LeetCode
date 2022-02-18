/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {

    function check(string) {
        
        if (string == string.split("").reverse().join("")) {
            return true;
        } else return false;
        
    }
    
    for(let i=0; i<Math.floor(s.length/2); i++) {
        // console.log(i, Math.floor(s.length/2), s[i], s[s.length-1-i])
       
        if(s[i] !== s[s.length-1-i]) {
            let a = [...s]
            let b = [...s]
            a.splice(i,1)
            // console.log(check(a.join("")))
            b.splice(s.length-1-i, 1)
            // console.log(check(b.join("")))
            
            if(check(a.join("")) || check(b.join(""))) {
                return true;
            } else return false;
            
        }
        
        
    }
        
  
//     console.log([...s].splice(1,2))

    
    return true;
};