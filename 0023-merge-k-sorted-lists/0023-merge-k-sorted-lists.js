/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    const temp = [];
  
    lists.forEach((nodeRoot) => {
        let cur = nodeRoot;
        while(cur){
            temp.push(cur.val);
            cur = cur.next;
        }
    })
    
    let node = new ListNode();
    const head = node;
    
    temp.sort((a,b) => a-b)
    .forEach(num => {
        node.next = new ListNode(num);
        node = node.next;
    })
    
    return head.next
};