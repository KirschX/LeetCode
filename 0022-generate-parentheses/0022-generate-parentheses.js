/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    
    let result = []
    
    function dfs(l,r,s) {
         // console.log(l,r,s)
        if(s.length === 2*n){
           
            result.push(s)
            return
        }
        
        
        
        if(l<n) dfs(l+1, r, s + '(')
        if(r<l) dfs(l, r+1, s + ')')
        
          
    }

    dfs(0,0, '')
    
    return result
};