function lg(n) {
    let shiftRightCount = 0;
    while (n != 0) {
        n >>= 1
        shiftRightCount++;
    }
    return shiftRightCount - 1;
}

function lg2(n) {
    // 设K <= log2N，即2的k次方极限逼近N
    let k = 0;
    let m = 1;
    while (m <= n) {
        m *= 2;
        k++;
    }
    return k - 1;
}

console.log(lg2(1025))

