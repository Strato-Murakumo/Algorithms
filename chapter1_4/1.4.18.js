// 1.4.18b局部最小元素：满足 a[i] < a[i-1]，且 a[i] < a[i+1] 的索引 i。
// 程序在最坏情况下所需的比较次数为 ~ 2lgN。
function findPartMin(a = []) {
    let mid;

    let lo = 1;
    let hi = a.length - 2;
    // 寻址左侧 lgN
    while (lo <= hi) {
        mid = parseInt((lo + hi) / 2);
        if (a[mid] < a[mid - 1] && a[mid] < a[mid + 1]) { return mid; }
        else if (a[mid - 1] < a[mid + 1]) { hi = mid - 1; }
        else if (a[mid - 1] > a[mid + 1]) { lo = mid + 1; }
    }

    lo = 1;
    hi = a.length - 2;
     // 寻址右侧 lgN
    while (lo <= hi) {
        mid = parseInt((lo + hi) / 2);
        if (a[mid] < a[mid - 1] && a[mid] < a[mid + 1]) { return mid; }
        else if (a[mid - 1] < a[mid + 1]) { lo = mid + 1; }
        else if (a[mid - 1] > a[mid + 1]) { hi = mid - 1; }
    }
    return -1;
}

console.log(findPartMin([6, 11, 14, 8, 25, 2, 1, 3, 4, 5]))