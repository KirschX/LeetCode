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
    if(!root) return []
    let que = [root]
    let result = []
    
    while(que.length) {
        let temp = []
        let L = que.length;
        for(let i=0; i<L; i++){
            const node = que.shift()
            if(node.left) que.push(node.left)
            if(node.right) que.push(node.right)
            temp.push(node.val)
        }
        result.push(temp)

        
    }
    return result
};