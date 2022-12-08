/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    
    const visited = new Set()
    let count = 0;
    
    
    for(let i=0; i<isConnected.length; i++){
        if(!visited.has(i)) {
            dfs(i)
            count++;
        }
    }
    

    function dfs (n,visiting) {
        
      
        for (let i =0; i<isConnected.length; i++) {
            // console.log(i)[n][i]
            if (isConnected[n][i] === 1 && !visited.has(i)) {
                 visited.add(n)
                dfs(i)
            }
        }
    
       
        // console.log(n, visiting, visited)
    }
    
    return count
};