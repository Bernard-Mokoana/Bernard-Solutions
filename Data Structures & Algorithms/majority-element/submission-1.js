class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let n = nums.length;

        if (n === 0) return 0;

        nums.sort();

        n = Math.floor(n/2)

        return nums[n]
    }
}
