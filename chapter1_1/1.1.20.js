function fib(n) {
    if (n == 0) {
        return 0
    } else {
        return Math.log(n) + fib(n - 1)
    }
}