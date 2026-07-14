/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let node = [];
        let cur = head;

        while (cur) {
            node.push(cur);
            cur = cur.next;
        }

        let size = node.length;
        let i = size - n;

        let l = 0;
        let r = size - 1

        if (i === 0) return head.next;

        let prevNode = node[i - 1];

        prevNode.next = node[i].next;

         return head;
    }
}
