var params = process.argv.splice(2);
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
console.log(euclid(params[0], params[1]))

// node 1.1.24.js 1111111 1234567