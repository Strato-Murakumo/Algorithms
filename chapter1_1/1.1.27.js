var count = 0;
function binomial(n, k, p) {
    count++;
    if (n == 0 & k == 0) {
        return 1.0;
    }
    if (n < 0 || k < 0) {
        return 0.0;
    }
    return (1.0 - p) * binomial(n - 1, k, p) + p * binomial(n - 1, k - 1, p);
}
binomial(100, 50, 0.25)

var count2 = 0;
function initArray(n, k) {
    let arr = [];
    for (let i = 0; i <= n + 1; i++) {
        arr[i] = []
        for (let j = 0; j <= k + 1; j++) {
            arr[i][j] = -1;
        }
    }
    return arr;
}
var arr = initArray(100, 50);
function memoryBinomial(n, k, p) {
    count2++;
    if (n == 0 & k == 0) {
        return 1.0;
    }
    if (n < 0 || k < 0) {
        return 0.0;
    }
    if (arr[n][k] == -1) {
        arr[n][k] = (1.0 - p) * memoryBinomial(n - 1, k, p) + p * memoryBinomial(n - 1, k - 1, p);
    }
    return arr[n][k];
}
memoryBinomial(100, 50, 0.25)
console.log(count2)