/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
        
    if(!head) return null
    let cur;
    let prev;
        while(head) {
            prev = new ListNode(head.val, prev)
            head = head.next;
        }
    
    return prev
    
};