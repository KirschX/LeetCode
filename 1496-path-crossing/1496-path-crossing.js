/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
        let pos = [0,0];
        let map = new Map();
        let result = false;
    
    // function toString (arr) {
    //     return `${arr[0]}${arr[1]}`
    // }
        map.set(JSON.stringify(pos), (map.get(JSON.stringify(pos)) || 0) + 1)
      
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
        map.set(JSON.stringify(pos), (map.get(JSON.stringify(pos)) || 0) + 1)
        // console.log(map)
        if(map.get(JSON.stringify(pos)) >= 2) {
            result = true;
        }
    }
    
    return result;
};