// 1.4.20 双调查找。如果一个数组中的所有元素是先递增后递减的，则称这个数组为双调的。
// 编写一个程序，给定一个含有 N 个不同 let 值的双调数组，判断它是否含有给定的整数。
// 程序在最坏情况下所需的比较次数为 ~3lgN。


//解法：先求局部最大的元素(驼峰)，再判断走向，lgN + 2lgN
function findPartMax(arr = []) {
    if (arr == null || arr.length == 0) {
        return -1;
    }
    if (arr.length == 1 || arr[0] > arr[1]) {
        return 0;
    }
    if (arr[arr.length - 1] > arr[arr.length - 2]) {
        return arr.length - 1;
    }

    let mid = 0;
    let left = 1;
    let right = arr.length - 2;
    while (left < right) {
        mid = parseInt((left + right) / 2);
        if (arr[mid - 1] < arr[mid]) {
            left = mid + 1;
        } else if (arr[mid + 1] < arr[mid]) {
            right = mid - 1;
        } else {
            return mid;
        }
    }
    return right;
}

function bitonicSearch(num, target) {
    if (num == null || num.length < 4) return -1;
    let maxIndex = findPartMax(num);
    if (num[maxIndex] > target) {
        //往左边查找
        let left = 0;
        let right = maxIndex;
        let mid = 0;
        while (left <= right) {
            mid = parseInt((left + right) / 2);
            if (num[mid] < target) {
                left = mid + 1;
            } else if (num[mid] > target) {
                right = mid - 1;
            } else {
                return mid;
            }
        }

        //往右边查找
        left = maxIndex;
        right = num.length - 1;
        mid = 0;
        while (left <= right) {
            mid = parseInt((left + right) / 2);
            if (num[mid] < target) {
                right = mid - 1;
            } else if (num[mid] > target) {
                left = mid + 1;
            } else {
                return mid;
            }
        }
        return -1;

    } else if (num[maxIndex] < target) {
        return -1;
    } else {
        return maxIndex;
    }
}

console.log(bitonicSearch([1, 2, 3, 4, 5, 6, 100, 89, 9, 8, 7], 7));