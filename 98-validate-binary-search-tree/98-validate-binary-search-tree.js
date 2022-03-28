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
var isValidBST = function(root) {
    
    let result = true;
    let prev;
    function check(node){
        if(!node) return;
        
        
        
        check(node.left)
        
        // console.log(prev, node.val)
        if(prev !== undefined && prev >= node.val) {
            return result=false
        }
        prev = node.val
        
        
        check(node.right)
        
   
    }
    
    check(root)
    
    return result
    
};