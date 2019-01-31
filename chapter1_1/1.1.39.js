var params = process.argv.splice(2);
var T = parseInt(params[0]);

var numsArr = [Math.pow(10, 6)];
var result = {};

// 运行T遍
for (let i = 0; i < T; i++) {
    for (let j = 0; j < numsArr.length; j++) {
        result[numsArr[j]] = {};
        result[numsArr[j]].arrA = (new Array(numsArr[j])).fill(0);
        for (let n = 0; n < result[numsArr[i]].arrA.length; n++) {
            result[numsArr[j]].arrA[n] = (Math.random() * (999999 - 100000) + 100000) >>> 0
        }
        result[numsArr[j]].arrB = (new Array(numsArr[j])).fill(0);
        for (let m = 0; m < result[numsArr[j]].arrB.length; m++) {
            result[numsArr[j]].arrB[m] = (Math.random() * (999999 - 100000) + 100000) >>> 0
        }
        result[numsArr[j]].times = 0;
        result[numsArr[j]].arrA = result[numsArr[j]].arrA.sort();
        result[numsArr[j]].arrB = result[numsArr[j]].arrB.sort();
        let memoryList = {}  //命中缓存
        for (let k = 0; k < result[numsArr[j]].arrA.length; k++) {
            if (memoryList[result[numsArr[j]].arrA[k]] == true) {
                result[numsArr[j]].times++
            }
            else if (binarySearch(result[numsArr[j]].arrA[k], result[numsArr[j]].arrB) > -1) {
                result[numsArr[j]].times++
                memoryList[result[numsArr[j]].arrA[k]] = true
            }
        }
    }
}
for (let key in result) {
    result[key].times = result[key].times / T;
}
console.log(result)

//针对排序好的二分查找
function binarySearch(key, arr = []) {
    let lo = 0;
    let hi = arr.length - 1;
    if (key < arr[0] || key > arr[arr.length - 1]) {
        return -1;
    }
    while (lo <= hi) {
        let mid = parseInt(lo + (hi - lo) / 2);
        if (key < arr[mid]) hi = mid - 1;
        else if (key > arr[mid]) lo = mid + 1;
        else return mid;
    }
    return -1;
}