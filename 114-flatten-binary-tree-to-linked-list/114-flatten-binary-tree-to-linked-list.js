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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    

    
    function DFS(node) {
        if(!node) return null;
        if(!node.left && !node.right) return node;
        
        let leftTail = DFS(node.left)
        let rightTail = DFS(node.right);
        
        if(leftTail) {
            leftTail.right = node.right;
            node.right = node.left;
            node.left = null;
        }
        
        return rightTail  || leftTail;
    }
    
    DFS(root)
};