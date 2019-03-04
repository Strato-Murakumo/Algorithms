// 1.4.12 编写一个程序，有序打印给定的两个有序数组（含有 N 个 int 值） 中的所有公共元素，程序在最坏情况下所需的运行时间应该和 N 成正比。

function calSameNum(arr1 = [], arr2 = []) {
    for (let i = 0, j = 0; i < arr.length && j < arr.length;) {
        if (arr1[i] > arr2[j]) {
            j++;
        }
        else if (arr1[i] < arr2[j]) {
            i++
        } else {
            i++; j++;
            console.log(arr1[i])
        }
    }
}