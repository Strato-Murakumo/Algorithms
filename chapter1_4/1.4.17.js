// 1.4.17 最遥远的一对（一维）。编写一个程序，给定一个含有 N 个 double 值的数组 a[]，在其中找到一对最遥远的值：
// 两者之差（绝对值）最大的两个数。程序在最坏情况下所需的运行时间应该是!!线性级别!!的。
function fastestNum(arr = []) {
    let min = 0, max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i]
        }
    }
    return { min, max };
}