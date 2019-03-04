// 1.4.14 4-sum。为 4-sum 设计一个算法。

// O(N⁴)
function fourSum(arr = []) {
    if (arr.length < 4) { return; }
    let times = 0;
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = j + 1; k < n; k++) {
                for (let l = k + 1; l < n; l++) {
                    times++;
                    if (arr[i] + arr[j] + arr[k] + arr[j] == 0) {
                        console.log(arr[i], arr[j], arr[k], arr[j])
                    }
                }
            }
        }
    }
    console.log(times);
}
fourSum([1, 3, 5, 6, 4, -1, -3, -4, -6, -6, -7, -9, -19, 7, 8]);

function fourSumBetter(arr = []){
    if (arr.length < 4) { return; }
    arr.sort();
    let times = 0;
    let n = arr.length;
    for (let i = 0; i < n - 3; i++) {
        for (let j = i + 1; j < n - 2; j++) {
            for (let k = j + 1, l = n - 1; k < l;) {
                if (arr[i] + arr[j] + arr[k] + arr[j] < 0) {
                    k++;
                } else if (arr[i] + arr[j] + arr[k] + arr[j] > 0) {
                    l--;
                } else {
                    k++; l--;
                    console.log(arr[i], arr[j], arr[k], arr[j]);
                }
                times++;
            }
        }
    }
    console.log(times);
}
fourSumBetter([1, 3, 5, 6, 4, -1, -3, -4, -6, -6, -7, -9, -19, 7, 8])