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
var connect = function(root) {
    
    function DSF(node) {
        if(!node) return;
        
        if(node.left && node.right){
            node.left.next = node.right;
            node.right.next = node.next ? node.next.left  : null
        }

        DSF(node.left)
        DSF(node.right)
        
        // console.log(node.val)
        
        
    }
    
    DSF(root)
    
    return root
}

  //             1
  //       2           3
  //   4     5      6    7
  // 8   9 10 11  12 13 14 15