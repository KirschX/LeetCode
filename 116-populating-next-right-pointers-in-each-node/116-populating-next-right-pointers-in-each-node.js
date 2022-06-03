/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
const connect = (root) => {
    if (!root) return root;
    
    const queue = [[0, root]];
    
    while (queue.length) {
        const [curNodelev, currNode] = queue.shift();
        
        if (queue.length) {
            const [nextNodelev, nextNode] = queue.shift();
            currNode.next = curNodelev === nextNodelev ? nextNode : null;
            queue.unshift([nextNodelev, nextNode]);
        } else {
            currNode.next = null;
        }
        
        currNode.left && queue.push([curNodelev + 1, currNode.left]);
        currNode.right && queue.push([curNodelev + 1, currNode.right]);
    }
    
    return root;
};