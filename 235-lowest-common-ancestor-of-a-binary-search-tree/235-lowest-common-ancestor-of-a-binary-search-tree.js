/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    
    let result;
    

    function BSF (node, count) {
        if(!node) return 0;
     
        let left = BSF(node.left, count)
        let right = BSF(node.right, count)
        
        if(node === p || node === q){count++;}

        // console.log(node.val, count, left, right)
        if((count + left + right) === 2) return result = node;
        
        count = count || left || right
        return count;
    }
    
    BSF(root, 0)
    
 
    
    return result
};


//     3 
//   1   4
// n  2