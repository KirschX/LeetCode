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
var sortList = function(head) {
    let H = head;
    let temp = [];
    
    while(head){
        temp.push(head.val)
        head = head.next;
    }
    
    temp = temp.sort((a,b) => a-b)
    // console.log(temp)
    
    let newHead = new ListNode();
    let NH = newHead;
    
    temp.map(item => {
        newHead.next = new ListNode(item)
        newHead = newHead.next;
    })
    
    return NH.next
};