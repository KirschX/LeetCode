/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
     s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    
   if (s === (s.split("").reverse().join(""))) return true
    else return false
    
};