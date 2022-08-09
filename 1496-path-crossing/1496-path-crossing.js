const coordToStr = ([x, y]) => x + ':' + y; // construct string from x and y

var isPathCrossing = function(path) {
    let dict = {
        'N': [0, 1],
        'S': [0, -1],
        'E': [1, 0],
        'W': [-1, 0],
    }
    let prev = [0, 0];
    let map = new Map();
    map.set(coordToStr(prev), 1); // initialise object with start position coordinates
    for (let i = 0; i < path.length; i++) {
        let direction = dict[path[i]]; 
        let newCoord = [prev[0] + direction[0], prev[1] + direction[1]]; // calculate new coordinate
        let newCoordKey = coordToStr(newCoord);
        map.set(newCoordKey, (map.get(newCoordKey) || 0) + 1); // increase count of x + y string coordinate
        if (map.get(newCoordKey) > 1) return true; // if there are two or more of the same coordinates then we hit our previous path
        prev = newCoord; // store new coordinate to use it for calculation in the next iteration
    // console.log(map)
    }
    return false;
};