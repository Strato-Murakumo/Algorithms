/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */


var addTwoNumbers = function (l1, l2) {
    let Node = new ListNode()
    let head = Node;
    let c = 0;

    while (l1 || l2 || c) {
        let v1 = l1 ? l1.val : 0;
        let v2 = l2 ? l2.val : 0;
        let v = v1 + v2 + c;
        head.next = new ListNode(v % 10);
        head = head.next;
        c = v >= 10 ? 1 : 0;
        l1 = l1 && l1.next;
        l2 = l2 && l2.next;
    }
    return Node.next
};