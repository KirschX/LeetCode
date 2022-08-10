/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
        let pos = [0,0];
        let map = new Map();
        let result = false;
    
    const toStr = ([x,y]) => x + ':' + y;
    console.log(toStr([2,3]))
        map.set(toStr(pos), (map.get(toStr(pos)) || 0) + 1)
      
    for(let i =0; i<path.length; i++){
        
        if(path[i] === "N"){
            pos[1] ++;
        } else if (path[i] === "S"){
            pos[1] --;
        } else if (path[i] === "W"){
            pos[0] --;
        } else if(path[i] === "E"){
            pos[0] ++;
        }
        map.set(toStr(pos), (map.get(toStr(pos)) || 0) + 1)
        // console.log(map)
        if(map.get(toStr(pos)) >= 2) {
            result = true;
        }
    }
    
    return result;
};