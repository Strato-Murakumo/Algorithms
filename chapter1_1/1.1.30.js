function euclid(p, q) {
    if (p == 0 || q == 0) {
        return 1;
    }
    if (p < q) {
        [p, q] = [q, p];
    }
    if (p % q == 0) {
        return q;
    } else {
        return euclid(q, p % q)
    }
}

function initArray(n, k) {
    let arr = [];
    for (let i = 0; i <= n + 1; i++) {
        arr[i] = []
        for (let j = 0; j <= k + 1; j++) {
            if (euclid(i, j) != 1) {
                arr[i][j] = false;
            } else {
                arr[i][j] = true;
            }
        }
    }
    return arr;
}

console.table(initArray(10,10))