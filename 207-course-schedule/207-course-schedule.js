/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numC, preQ) {
    
    
    const order = [];
    const queue = [];
    const graph = new Map();
    const visiting = new Set();
    const visited = new Set();

    
    for(const [e,v] of preQ) {
        graph.set(v, [...(graph.get(v) || []), e])
    }
    
    for(const [v,e] of graph){
        if(DFS(v)){
            return false;
        }
    }
    
    function DFS (v){
        visiting.add(v);
        let edges = graph.get(v);
        
        if(edges){
            for(let e of edges){
                
                if(visited.has(e)){ //skip if it is explored already
                    continue;
                }
                if(visiting.has(e)){
                    return true;
                }
                
                if(DFS(e)){
                    return true;
                }
            }
            
        }
        
        visiting.delete(v);
        visited.add(v);
        return false;
    }
    
    return true;
};