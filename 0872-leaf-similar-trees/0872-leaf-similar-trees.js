/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    
    const dfs = (node, arr = []) => {
        if(!node) return;
        
        // console.log(node.val)
        if(!node.left && !node.right) {
            arr.push(node.val)
            // console.log(node.val)
        }
        
        dfs(node.left, arr)
        dfs(node.right, arr)
        
        
        return arr;
    }
    
    let res1 = dfs(root1)
    // console.log(res1)
    let res2 = dfs(root2)
//     console.log(res2)
    
    if(JSON.stringify(res1) === JSON.stringify(res2)) return true
    else return false
};