/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
        let pos = [0,0]
        let result = false;
        let set = new Set()
        set.add(JSON.stringify([0,0]))
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
        if(set.has(JSON.stringify(pos))) result = true;
        set.add(JSON.stringify(pos))
        // console.log(set)
    }
    
    return result;
};