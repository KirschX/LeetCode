/**
 * @param {number} capacity
 */

var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.map = new Map();
    this.head = {key: null, val: null, prev: null, next: null};
    this.tail = {key: null, val: null, prev: this.head, next: null};
    this.head.next = this.tail;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    
   if (this.map.has(key)) {
        const node = this.map.get(key);
        this.remove(node);
        this.addToHead(node);
        return node.val;
    } else {
        return -1;
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
     if (this.map.has(key)) {
        const node = this.map.get(key);
        node.val = value;
        this.remove(node);
        this.addToHead(node);
    } else {
        if (this.map.size === this.capacity) {
            const node = this.tail.prev;
            this.remove(node);
            this.map.delete(node.key);
        }
        const node = {key, val: value, prev: null, next: null};
        this.map.set(key, node);
        this.addToHead(node);
    }

};

LRUCache.prototype.remove = function(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
};

/**
 * @param {object} node
 * @return {void}
 */
LRUCache.prototype.addToHead = function(node) {
    node.prev = this.head;
    node.next = this.head.next;
    this.head.next.prev = node;
    this.head.next = node;
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

