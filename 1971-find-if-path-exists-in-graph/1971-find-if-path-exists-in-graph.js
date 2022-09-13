var validPath = function(n, edges, start, end) {
    let adjacencyList = {};
    let visited = {};
    let stack = [start];
    
    // build adjacency list
    edges.forEach(edge => {
        let v = edge[0], e = edge[1];
        
        if(!adjacencyList[v]) adjacencyList[v] = [];
        if(!adjacencyList[e]) adjacencyList[e] = [];
        
        adjacencyList[v].push(e);
        adjacencyList[e].push(v);   
    })
    
    while(stack.length) {
        let vertex = stack.pop();
        visited[vertex] = true;    
        adjacencyList[vertex] && adjacencyList[vertex].forEach(neighbor => {
            if(!visited[neighbor]) stack.push(neighbor);
        })        
    }    
    return visited[end] ? true : false;
};