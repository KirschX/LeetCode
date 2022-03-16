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
var diameterOfBinaryTree = function(root) {
    
    //DFS
    
//     function check(root) {
//         if(!root) return;
        
        
//         check(root.left)
        
//         console.log(root.val)
        
//         check(root.right)
//     }
    
//     check(root)
    
    //BFS
    
//     let que = [root];
    
//     while(que.length !== 0) {
        
//         let node = que.shift()
        
//         console.log(node.val)
        
//         if(node.left) que.push(node.left)
//         if(node.right) que.push(node.right)
            
//     }
    
    let max = 0;
    let depth = 0;

    function maxD (node) {
        if (!node) return 0;
        
        let left = maxD(node.left);
        let right = maxD(node.right);
        
        max = Math.max(max, left + right);
        let depth = Math.max(left, right);
        // console.log(node.val, max, depth)
        
        return depth +1;
    }
    
    maxD(root)
    
    console.log(max, depth)
    return max;
    
    
};