class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let n = height.length;
        let l = 0;
        let r = n - 1;
        let res = 0;

        let leftMax = height[l];
        let rightMax = height[r];

        if (n === 0) {
            return 0;
        }

        while (l < r){
            if (leftMax < rightMax) {
                l++;
                leftMax = Math.max(leftMax, height[l]);
                res += leftMax - height[l];
            } else {
                r--;
                rightMax = Math.max(rightMax, height[r]);
                res += rightMax - height[r];
            }
        }

        return res;
    }
}
