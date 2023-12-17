/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    
    const n = image.length;
    const m = image[0].length;
    const target = image[sr][sc]
    
    const visited = new Array(n).fill(0).map((item) => new Array(m).fill(0));

    
    function dfs(x,y) {
        if(x>=n || y>=m || x<0 || y<0) return;
        if(visited[x][y] === 1 || image[x][y] !== target) return;

        visited[x][y] = 1;
        image[x][y] = color;

        
        
        if(image[x+1]?.[y] !== undefined) dfs(x+1,y)
        if(image[x][y-1] !== undefined) dfs(x,y-1)
        if(image[x-1]?.[y] !== undefined) dfs(x-1, y)
        if(image[x][y+1] !== undefined) dfs(x, y+1)

    }
    
    dfs(sr,sc);

    return image
};