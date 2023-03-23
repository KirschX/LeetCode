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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let que = [root]
    let result = []
    
    while(que.length) {
        if(que.length === 0) return;
        
        let temp = []
        let L = que.length;
        for(let i=0; i<L; i++){
            const node = que.shift()
            if(!node) return []
            if(node && node.left) que.push(node.left)
            if(node && node.right) que.push(node.right)
            temp.push(node.val)
        }
        result.push(temp)

        
    }
    return result
    
    
//        for(let i=0; i<que.length; i++){
           
//        }
        
 
   

    
    // dfs()
};