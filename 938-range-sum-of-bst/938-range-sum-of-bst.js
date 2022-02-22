/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */

// 
var rangeSumBST = function(root, low, high) {
    
    let que = [root];
    let sum = 0;
    
    while(que.length) {
        
            let a = que.shift();
            if(a.val >= low && a.val <= high) sum = sum + a.val
        
            if(a.left) que.push(a.left)
        
            if(a.right) que.push(a.right)
   
          }
    
    return sum;
};


