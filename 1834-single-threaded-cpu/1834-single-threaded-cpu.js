/**
 * @param {number[][]} tasks
 * @return {number[]}
 */
var getOrder = function(tasks) {
    let res = [];
    const mpq = new MinPriorityQueue({
        compare: (a, b) => { // Compare function
            if(a[1] === b[1]) return a[2] - b[2]; // Compare by index if processing time is equal
            return a[1] - b[1]; // Sort by processing time
        }
    });
    
    tasks = tasks.map(([a, b], index) => [a, b, index]);
    tasks.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

     let currentProcessingTime = tasks[0][0]; 
     let i = 0;
    //
    while(mpq.size() || i < tasks.length){
        while(i < tasks.length && currentProcessingTime >= tasks[i][0]) { // Check if task is able for processing
            mpq.enqueue(tasks[i]); // Add task based on its comparison with other values in the queue in O(log(n)) runtime
            i++; // Increment i
        }
        if(mpq.size()){
            const task = mpq.dequeue();
            res.push(task[2]);
            currentProcessingTime += task[1];
        } else {
            currentProcessingTime = tasks[i][0];
        }
    }

    return res;
};

//