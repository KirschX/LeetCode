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
 * @return {number}
 */
var maxDepth = function(root) {
    
    let depth =0;
    
    
    function checkDepth (root, len) {
        
        if(!root) return;
        
       
        depth = Math.max(len, depth)
        console.log(depth)
        
        checkDepth(root.left, len+1)
        checkDepth(root.right, len+1)
    }
    checkDepth(root, 1)
    
    return depth
};