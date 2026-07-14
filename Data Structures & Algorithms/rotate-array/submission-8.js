class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        let n = nums.length;
        let l = 0;
        let r = n - 1;

        k = k % n;

        while (l < r) {
            let temp = nums[l];
            nums[l] = nums[r];
            nums[r] = temp;
            l++;
            r--;
        }

        l = 0;
        r = k - 1;
          while (l < r) {
            let temp = nums[l];
            nums[l] = nums[r];
            nums[r] = temp;
            l++;
            r--;
        }

        l = k;
        r = n - 1;
           while (l < r) {
            let temp = nums[l];
            nums[l] = nums[r];
            nums[r] = temp;
            l++;
            r--;
        }

        return nums;
    }
}
