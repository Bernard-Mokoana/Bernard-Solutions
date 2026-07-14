class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {
        let n = s.length;
        let k = n - 1;

        for(let i = 0; i < k; i++){
            let temp = s[i]
            s[i] = s[k];
            s[k] = temp;
            k--;
        }

        return
    }
}
