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
var minDepth = function(root) {
    
    min = 10000
    
    if(!root) return 0
    if(!root.left && !root.right) return 1
    
    function search(node, depth) {
        if(!node) return;
        
        
        
        if(!node.left && !node.right) min = Math.min(min, depth)
        
        // console.log(node.val, depth, min)
        
        search(node.left, depth+1)
        search(node.right, depth+1)
    }
    
    search(root, 1)
    
    return min
};