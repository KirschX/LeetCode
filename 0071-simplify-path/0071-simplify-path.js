/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    
    let params = [];

    let path2 = path.split("/")
    // console.log(path2)
    
    for(let i =0; i<path2.length; i++){
        let item = path2[i];
        if( item === '..') {
            params.pop();
            continue;
        }
        if(item === '.' || item === "") continue;
        
        params.push(item)
    }
    console.log(params)

    // params.pop()
    return '/'+params.join("/") || "/"
};