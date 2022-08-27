/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    
    

    
    for(let i=0; i<board.length; i++){
        for(let j=0; j<board[0].length; j++){
            if(board[i][j] === "O" && (i === 0 || j === 0 || i === board.length-1 || j === board[0].length-1 )) dfs(i,j)
        }
    }

   
    for(let i=0; i<board.length; i++){
        for(let j=0; j<board[0].length; j++){
            if(board[i][j] === "V") board[i][j] = "O"
            else board[i][j] = "X"
        }
    }
    
    function dfs(x, y) {
        if(x < 0 || x >= board.length ||  y < 0 || y >= board[x].length ||  board[x][y] === "V" ||  board[x][y] === "X") return;
        if(x < 0 || x >= board.length ||  y < 0 || y >= board[x].length ||  board[x][y] === "V" ||  board[x][y] === "X") return;
        
        board[x][y] = "V";
        dfs(x + 1, y);
        dfs(x - 1, y);
        dfs(x, y + 1);
        dfs(x, y - 1);
     
        return;
    }
    

    

    
}