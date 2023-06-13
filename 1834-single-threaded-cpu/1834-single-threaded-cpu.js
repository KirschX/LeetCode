/**
 * @param {number[][]} tasks
 * @return {number[]}
 */

var getOrder = function(tasks) {
    const mpq = new MinPriorityQueue({
        compare: (a, b) => { // Compare function
            if(a[1] === b[1]) return a[2] - b[2]; 
            return a[1] - b[1]; // Sort by processing time
        }
    });
    tasks = tasks.map(([a,b],i)=>[a,b,i]).sort((a,b)=>a[0]-b[0] || a[1] - b[1])
    
    let res = [];
    let curTime = tasks[0][0];
    let i = 0;
    
    
    while(mpq.size() || i < tasks.length ) {
        // 시작 시점이 같은 task, Available tasks에 enque
        while(i < tasks.length && curTime >= tasks[i][0]) {
            mpq.enqueue(tasks[i]);
            i++;
        }
        // mpq에 실행할 task가 남았다면 실행
        if(mpq.size()){
            const temp = mpq.dequeue();
            res.push(temp[2]);
            curTime = curTime + temp[1];
        // 실행할 task가 없다면 다음 task 시간으로 넘어가기
        } else {
            curTime = tasks[i][0];
        }
        
        
    }


    return res;
};
