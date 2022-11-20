/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {

    const target = graph.length -1;

    const res = [];
    
    function dfs(N, path) {

        path = [...path, N]
        // console.log(path)

        if(N === target){
            res.push(path);
            return;
        }

        const edges = graph[N]
        if(edges) {
            for(let e of edges){
                dfs(e, [...path])
            }
        }
    
    }

    dfs(0, [])

    return res;
    
};