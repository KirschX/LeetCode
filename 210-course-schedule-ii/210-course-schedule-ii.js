/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
  
    let obj = new Object();
    const visiting = new Set();
    const visited = new Set();
    let stack = [];
    let isCycle = false;
    
    prerequisites.map(arr => {
        const [course, pre] = arr
        obj[course] = [...(obj[course] ?? []), pre]
    })
    
    // console.log(obj)
    
    const DFS = function (v) {
        visiting.add(v)
        let edges = obj[v];
        
        if(edges) {
            for(let e of edges){
                if(visiting.has(e)){
                    isCycle = true;
                    return;
                }
                if(visited.has(e)){
                    continue;
                }
               DFS(e)
            }
        }
        
        visiting.delete(v)
        visited.add(v)
            // console.log(visiting, visited, stack)
        stack.push(v)
    }
    
 
    // console.log(visited)
    // console.log(stack)
    
    for(let i =0; i<numCourses; i++){
        if(!visited.has(i)) DFS(i)
    }
    

   return isCycle ? [] : stack 
};
