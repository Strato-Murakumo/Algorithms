/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let longestString = '';
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < 2; j++) {
            let left = i;
            let right = i + j;
            while (s[left] && s[left] === s[right]) {
                left--;
                right++;

            }
            if ((right - left - 1) > longestString.length) {
                longestString = s.substring(left + 1, right)
            }
        }
    }
    return longestString;
};