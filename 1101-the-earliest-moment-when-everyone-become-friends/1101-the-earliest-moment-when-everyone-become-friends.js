function earliestAcq(logs, N) {
    const parent = new Array(N).fill(0).map((_, i) => i);

    let compCount = N;

    function find(x) {
        if(parent[x] === x){
            return x;
        }
        parent[x] = find(parent[x]);
       return parent[x];
    }

    function union(x, y) {
    //root x,y를 찾아서 
    const rootX = find(x);
    const rootY = find(y);
        
        if (rootX !== rootY) {
            parent[rootX] = rootY;
            compCount --;
        }
    }

    logs.sort((a, b) => a[0] - b[0]);

    for (let [time, x, y] of logs) {
        union(x, y);
        if (compCount === 1) {
            return time;
        }
    }

    return -1;
}