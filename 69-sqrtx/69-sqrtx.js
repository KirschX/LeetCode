/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    
    // if (x==0) return 0
    
    for (let i=0; i<=x; i++) {
        // console.log(i)
        
        if (i*i == x) {
            return i
        } else if (i*i>x) {
            return i-1
        }
    }
    
    
};