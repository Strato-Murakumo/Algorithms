// 冒泡排序 O(n²) 空间复杂度：O(1)   O(n)~O(n²)
var example = [8, 94, 15, 88, 55, 76, 21, 39];
function bubbleSort1(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr;
}
console.log(bubbleSort1(example));

// 冒泡排序优化
var example = [8, 94, 15, 88, 55, 76, 21, 39];
function bubbleSort2(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        var mark = 0;
        for (var j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                mark = 1;
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
        if (!mark) break;
    }
    return arr;
}
console.log(bubbleSort2(example));


// 冒泡排序优化
var example = [8, 94, 15, 88, 55, 76, 21, 39];
function bubbleSort3(arr) {
    var len = arr.length;
    var pos = len;
    while (pos > 0) {
        pos = 0;
        for (var i = 0; i < len; i++) {
            if (arr[i + 1] < arr[i]) {
                [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]]
                pos = i;
            }
        }
        len = pos
    }
    return arr;
}
console.log(bubbleSort3(example));

// 选择排序  O(n²) 空间复杂度：O(1)   O(n²)~O(n²)
var example = [8, 94, 15, 88, 55, 76, 21, 39];
function selectSort(arr) {
    var len = arr.length;
    var minIndex;
    for (i = 0; i < len - 1; i++) {
        minIndex = i;
        for (j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
    return arr;
}
console.log(selectSort(example));

// 归并排序  O(nlogn) 空间复杂度：O(n)   O(nlogn)~O(nlogn)
var example = [8, 94, 15, 88, 55, 76, 21, 39];
function mergeSort(arr) {
    var len = arr.length;
    if (len < 2) { return arr }
    var middle = Math.floor(len / 2),
        left = arr.slice(0, middle),
        right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
    var result = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
    }
    return result.concat(left, right);
}
console.log(mergeSort(example));

//插入排序 O(n²)  空间复杂度：O(n)   O(n²)~O(n)
var example = [8, 94, 15, 88, 55, 76, 21, 39];
function insertSort(arr) {
    var j, i, key;
    for (j = 1; j < arr.length; j++) {
        key = arr[j];
        i = j - 1;
        while (i > -1 && arr[i] > key) {
            arr[i + 1] = arr[i];
            i = i - 1;
        }
        arr[i + 1] = key;
    }
    return arr;
}
console.log(insertSort(example));

//快速排序
// 思路:
// - 随机选择数组中的一个数 A，以这个数为基准
// - 其他数字跟这个数进行比较，比这个数小的放在其左边，大的放到其右边
// - 经过一次循环之后，A 左边为小于 A 的，右边为大于 A 的
// - 这时候将左边和右边的数再递归上面的过程
//Todo 优化
var example = [8, 94, 15, 88, 55, 76, 21, 39];
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let pivot = arr[Math.floor(arr.length / 2)];
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length; i++) {
        arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
    }
    return quickSort(left).concat([pivot], quickSort(right));
}
console.log(quickSort(example));