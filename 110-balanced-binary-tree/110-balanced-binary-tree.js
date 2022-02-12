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
 * @return {boolean}
 */
var isBalanced = function(root) {
    

    function checkDepth (node, depth) {
        if(!node) return depth;
        

        let leftD = checkDepth(node.left, depth+1)
        let rightD = checkDepth(node.right, depth+1)
        
        // console.log(depth, node.val, leftD, rightD)
        
        if(leftD && rightD) {
           return Math.abs(leftD-rightD) < 2 ? Math.max(leftD,rightD) : 0;
        }
        

        return 0;
    }

    return root ? checkDepth(root, 0) : true

    

};