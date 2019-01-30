function histogram(arr, n) {
    let result = (new Array(n)).fill(0)
    console.log(result)
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0 && arr[i] < n) {
            result[arr[i]]++;
        }
    }
    return result;
}

console.log(histogram([1, 1, 2, 3, 1, 7, 5, 3, 2, 2, 2], 8))