/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let combineArray = nums1.concat(nums2);
    combineArray = combineArray.sort((a,b)=>a-b);
    if (combineArray.length % 2 == 1) {
        return combineArray[parseInt(combineArray.length / 2)]
    } else {
        return ((combineArray[combineArray.length / 2] + combineArray[combineArray.length / 2 - 1])) / 2;
    }
};