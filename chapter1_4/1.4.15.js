// 1.4.15 快速 3-sum。作为热身，使用一个线性级别的算法（而非基于二分查找的线性对数级别的算法）实现 TwoSumFaster 来计算已排序的数组中和为 0 的整数对的数量。
// 用相同的思想为 3-sum 问题给出一个平方级别的算法。
function ThreeSumFaster(arr = []) {
    let count = 0;
    let n = arr.length;
    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1, k = n - 1; j < k;) {
            if (a[i] + a[j] + a[k] < 0) {
                j++;
            } else if (a[i] + a[j] + a[k] > 0) {
                k--;
            } else {
                j++;
                k--;
                ++count;
            }
        }
    }
    console.log(count);
}