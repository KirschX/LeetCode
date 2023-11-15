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
    // const root = newListNode(0)
    // let result = ;
    // while()
    const temp = [];
  
    lists.forEach((nodeRoot) => {
        let cur = nodeRoot;
        while(cur){
            temp.push(cur.val);
            cur = cur.next;
        }
    })
    
    temp.sort((a,b) => a-b);
    // console.log(temp)
    let node = new ListNode(0);
    const head = node;
    
    while(temp.length >0){
        node.next = new ListNode(temp.shift());
        node = node.next;
    }
    
    return head.next
};