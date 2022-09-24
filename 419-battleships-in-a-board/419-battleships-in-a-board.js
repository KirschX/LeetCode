/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
    // 0957~
    let result=0;
    function dfs(x,y) {
        
        if(x >= board.length || y >= board[0].length) return;
        board[x][y] = "."
        
        if(board[x+1] && board[x+1][y] && board[x+1][y] === "X") dfs(x+1, y)
        if(board[x][y+1] && board[x][y+1] === "X") dfs(x, y+1)
    }
    
    for(let i=0; i<board.length; i++){
        for(let j =0; j<board[0].length; j++){
            if(board[i][j] === "X") {
                dfs(i,j)
                // console.log(board)
                result ++;
            }
        }
    }
    
    return result
};