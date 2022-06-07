/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    
  
    function DSF(x,y) {
        if(x < 0 || y < 0 || x >= grid.length || y >= grid[0].length || grid[x][y] === "0") return;
        
        grid[x][y] = "0";
        
        DSF(x, y+1) // right
        DSF(x+1, y) // down
        DSF(x-1, y) // up
        DSF(x, y-1) // left
        
    }
    
    let count = 0;

    for(let i=0; i<grid.length; i++){
        
        for(let j=0; j<grid[i].length; j++){
            if(grid[i][j] === "1")
            count++;
            DSF(i,j);
        }
    }
    
    return count;
};

 11000
 11000
 00100
 00011