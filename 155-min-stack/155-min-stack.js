
var MinStack = function() {
    this.arr = [];
    this.min= Number.MAX_SAFE_INTEGER;
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    
    this.arr.push(val);
    this.min = Math.min(this.min, val);
    // console.log(this.min)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.arr.pop();
    this.min= Math.min(...this.arr)
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.arr[this.arr.length-1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */