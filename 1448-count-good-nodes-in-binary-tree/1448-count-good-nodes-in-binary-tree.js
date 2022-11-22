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
var goodNodes = function(root) {
    
    let count = 0;
    
    function dfs(node, target) {
        if(!node) return;

        if(node.val >= target) {
            target = node.val;
            count++;
        }
        
        // console.log(node.val, count)
     
        
        let left = dfs(node.left, target)
        let right = dfs(node.right, target)


        // console.log("ss", node.val, left,right)
        

    }
    
    dfs(root, root.val)
    
    return count
};

      //    2
      // n    4
      //    10  8
      //   n n 4