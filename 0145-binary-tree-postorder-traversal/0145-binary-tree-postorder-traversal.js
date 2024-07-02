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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    const arr = [];
    function dfs(node) {
        if(!node?.val) return;
        
        dfs(node.left)
        dfs(node.right)
 
       arr.push(node.val)
    }
    
    dfs(root)
    
    return arr
};