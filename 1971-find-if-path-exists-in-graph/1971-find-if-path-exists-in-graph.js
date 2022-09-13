var validPath = function(n, edges, start, end) {
    let adjacencyList = new Map();
    let visited = {};
    let stack = [start];
    
    // build adjacency list
//     edges.forEach(edge => {
//         let v = edge[0], e = edge[1];
        
//         if(!adjacencyList[v]) adjacencyList[v] = [];
//         if(!adjacencyList[e]) adjacencyList[e] = [];
        
//         adjacencyList[v].push(e);
//         adjacencyList[e].push(v);   
//     })
    
    for (let [k,v] of edges) {
        if(k === start && v === end) result = true;
         adjacencyList.set(k, [...(adjacencyList.get(k) || []), v])
         adjacencyList.set(v, [...(adjacencyList.get(v) || []), k])
    }
    
    while(stack.length) {
        let vertex = stack.pop();
        visited[vertex] = true;    
        adjacencyList.get(vertex) && adjacencyList.get(vertex).forEach(neighbor => {
            if(!visited[neighbor]) stack.push(neighbor);
        })        
    }    
    return visited[end] ? true : false;
};