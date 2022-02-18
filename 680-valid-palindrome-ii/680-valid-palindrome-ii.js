/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {

    function check(string) {
        
        // if (string == string.split("").reverse().join("")) {
        //     return true;
        // } else return false;
        
        for(let i=0; i<Math.floor(string.length/2); i++) {
            console.log(string[i], string[string.length-1-i])
            if(string[i] !== string[string.length-1-i]) {
                return false;
            }
        }
        
        return true;
        
    }
    
    for(let i=0; i<Math.floor(s.length/2); i++) {
        if(s[i] !== s[s.length-1-i]) {
            let a = s.slice(i+1, s.length-i)
            let b = s.slice(i, s.length-1-i)
        
            // console.log(a)
            if(check(a)|| check(b)) {
                return true;
            } else return false;
            
        }
        
        
    }
        


    
    return true;
};