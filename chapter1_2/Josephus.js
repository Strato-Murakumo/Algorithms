function Josephus(n, m) {
    return n == 1 ? 0 : (Josephus(n - 1, m) + m) % n;
}
console.log(Josephus(41, 3) + 1);

function printJosephus(n, m) {
    let result = 0;
    for (let i = 2; i <= n; i++) {
        result = (result + m) % i;
    }
    return result + 1;
}
console.log(printJosephus(41, 3));
