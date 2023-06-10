/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    class MinPQ {
        constructor() {
            this.compare = (a,b) => a - b
            this.heap = [];
        }
        
        enque(v) {
            this.heap.push(v);
            this.heap.sort(this.compare)
       
        }
        
        peek() {
            if(this.size === 0) return null;
            return this.heap[0]
        }
        
        deque() {
            if (this.size === 0) return null;
            this.heap.shift();
      
            return;
        }
        
        get size() {
            return this.heap.length;
        }
    }
    
    const minPQ = new MinPQ();
    let max = 0;
    
    intervals.sort((a,b) => a[0] - b[0])
    
    intervals.forEach(([start,end]) => {
        
        if(minPQ.size > 0 && start >= minPQ.peek()){
            minPQ.deque();
        }
        minPQ.enque(end);
        max = Math.max(max, minPQ.size)
    })

    
    return max;
};