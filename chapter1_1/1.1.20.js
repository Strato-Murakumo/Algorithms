// ln(N!) == ln1 + ln2 + ln3 + …… lnN
function fib(n) {
    if (n == 0) {
        return 0
    } else {
        return Math.log(n) + fib(n - 1)
    }
}