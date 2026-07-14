class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let n = nums.length;

        if(n === 0) return 0;

        let k = 1;

        for (let i = 1; i < n; i++) {
            if (nums[i] !== nums[i - 1]) {
                nums[k] = nums[i];
                k++;
            }
        }

        return k;
    }
}
