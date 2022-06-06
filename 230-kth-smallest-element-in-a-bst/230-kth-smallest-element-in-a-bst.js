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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    // if(!root.left && !root.right) return root.val
    
    let arr = [];
    
    function DSF (node, depth) {
        if(!node) return 0;
  
        DSF(node.left)
        DSF(node.right)
        
        arr.push(node)
        
        // console.log(node.val,depth)
    }
    
    DSF(root, 0)
    
    arr.sort((a,b) => a.val - b.val)
    
    
   // console.log(arr)
    
    return arr[k-1].val
};