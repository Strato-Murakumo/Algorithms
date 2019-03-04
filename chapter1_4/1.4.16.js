// 1.4.16 最接近一对（一维）。编写一个程序，给定一个含有 N 个 double 值的数组 a[]，在其中找到一对最接近的值：
// 两者之差（绝对值）最小的两个数。程序在最坏情况下所需的运行时间应该是 !!线性对数级别!! 的。
function closestNum(arr = []) {
    arr.sort();
    let minI = 0;
    let minValue = arr[arr.length - 1];
    for (let i = 0; i < arr.length; i++) {
        let distance = arr[i + 1] - arr[i]
        if (Math.abs(distance) < minValue) {
            minI = i;
            minValue = Math.abs(distance);
        }
    }
    return { minI, minValue };  //key为 minI,minI+1;
}