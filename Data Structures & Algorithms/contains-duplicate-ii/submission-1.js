class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        let n = nums.length;

        // nums.sort((a,b) => a - b)

        for (let i = 0; i < n; i++){
            for (let j = i + 1; j < Math.min(n, i + k + 1); j++) {
                if(nums[i] === nums[j]) {
                    return true
                }
            }
        }

        return false;
    }
}
