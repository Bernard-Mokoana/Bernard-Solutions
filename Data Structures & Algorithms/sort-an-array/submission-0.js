class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        let n = nums.length;

        for (let i = 0; i < n; i++) {
            for(let j = n - 1; j > i; j--) {
                if(nums[i] > nums[j]) {
                let temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
            }
            }
        }

        return nums;
    }
}
