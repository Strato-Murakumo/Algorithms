// 1.4.23 分数的二分查找。设计一个算法，使用对数级别的比较次数找出有理数 p/q，
// 其中 0<p<q<N，比较形式为给定的数是否小于 x?
// 提示：两个分母均小于N的有理数之差不小于1/N2。

function findNum(key, arr) {
    let N = arr.length;
    let lo = 0;
    let hi = arr.length - 1;
    let threshold = 1.0 / (N * N);

    while (lo < hi) {
        let mid = parseInt((lo + hi) / 2);
        if (Math.abs(arr[mid] - key) <= threshold) return mid;
        else if (key > arr[mid]) lo = mid + 1;
        else hi = mid - 1;
    }

    return -1;
}