/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let hashObject = {};
    let leftNum;
    for (let i = 0; i < nums.length; i++) {
        leftNum = target - nums[i]
        if (leftNum in hashObject) {
            return [hashObject[target - nums[i]], i];
        } else {
            hashObject[nums[i]] = i;
        }
    }
};