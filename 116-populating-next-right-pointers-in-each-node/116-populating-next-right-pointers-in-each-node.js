/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    let que = [[0,root]];
    
    while(que.length !== 0){
        let [depth, node] = que.shift();
        


        
        if(que[0]){
            if(depth === que[0][0]){
                node.next = que[0][1]
            }
        }
        
        
        if(node){
            if(node.left) que.push([depth+1,node.left]);
            if(node.right) que.push([depth+1,node.right]);
        }
               
        if(node) console.log(depth, node)
    }
    
    
   // console.log(root)
    return root;
}