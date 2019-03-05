/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = s => {
    let hash = {};
    let left = 0;
    return s.split('').reduce((max, v, i) => {
        left = hash[v] >= left ? hash[v] + 1 : left;
        hash[v] = i;
        return Math.max(max, i - left + 1);
    }, 0)
};

const lengthOfLongestSubstring = s => {
    let res = 0;
    let left = 0;
    for (let i = 0; i < s.length; i++) {
        const index = s.indexOf(s[i], left);
        if (index > -1 && index < i) {
            left = index + 1;
        }
        res = Math.max(res, index - left + 1);
    }
    return res;
};

lengthOfLongestSubstring("abcabcbb")

