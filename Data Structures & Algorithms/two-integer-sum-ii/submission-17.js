class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let n = numbers.length;
        let l = 0;
        let r = n - 1;

        while(l < r) {
            let curSum = numbers[l] + numbers[r];

            if (curSum > target) {
                r--; 
        } else if (curSum < target) {
            l++;
        } else {
              return [l + 1, r + 1]
        }
}
return [];
}
}