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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    
    let arr = [];

    function allRoot (node, temp) {
        if(!node) return;
        
        if(!node.left && !node.right) {
            arr.push(temp + node.val);
            return;
        }
        
        temp = temp + node.val


        allRoot(node.left, temp + "->");
       
        allRoot(node.right, temp + "->");
        


    }
    
    allRoot(root, "")
    return arr
    
   
};