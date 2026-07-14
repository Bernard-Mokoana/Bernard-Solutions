class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s, t) {
        let i = 0;
        let j = 0;
        let n = s.length;
        let m = t.length;

        while(i < n && j < m) {
            if (s[i] === t[j]) {
                i++;
            }
            j++;
        }

        console.log(i);
        console.log(n)

        return i == n;
    }
}
