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
var sumNumbers = function(root) {
    
    let result = 0;
    
    function DSF(node, sNum){
        if(!node) return;
        sNum = sNum + node.val.toString()
        if(!node.left && !node.right) result = +result + +sNum
        //console.log(sNum)
        
        DSF(node.left, sNum)
        DSF(node.right, sNum)
        
    }
    
    DSF(root, "")
    
   //console.log(result)
    
    return result
};