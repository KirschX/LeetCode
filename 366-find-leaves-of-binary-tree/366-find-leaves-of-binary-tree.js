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
var findLeaves = function(root) {
    
    let result = [];
    let temp = [];
    
    function dfs(node) {
        if(!node) return null;

        if(!node.left && !node.right) {
            temp.push(node.val)
            return null;
        }

        node.left = dfs(node.left)
        node.right = dfs(node.right)
        
        return node;
    }
    
    while(root){
        root = dfs(root)
        result.push(temp);
        temp = [];
        if(!root) break;
    }
    

    // console.log(result, temp)
    // console.log(root)
    

    return result;
};


// dfs 순회 - leaf val을 temp에 넣고 초기화 - while문 돌기(조건: ) - 