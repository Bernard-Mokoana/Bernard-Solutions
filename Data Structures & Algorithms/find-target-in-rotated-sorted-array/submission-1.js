class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let i = 0;
        let n = nums.length;

        while (i < n) {
            if (nums[i] === target) {
                return i;
            } 
            i++;
        }

        return -1;
     }
}
