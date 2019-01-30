function fb1(n) {
    if (n <= 2) {
        return 1;
    } else {
        return fb1(n - 1) + fb1(n - 2)
    }
}

function fb2(count) {
    var count = count * 1, //如果为其他类型，则转int型
        tailFactorial = function (count, curr = 1, next = 1) { //ES6函数参数默认值
            if (count == 0) {
                return curr;
            } else {
                return tailFactorial(count - 1, next, curr + next); //尾递归采用函数，可有效解决栈溢出问题
            }
        };
    return tailFactorial(count);
}

function fb3(count) {
    var count = count * 1,
        tailFactorial = function (curr, next, count) {
            if (count === 0) {
                return curr;
            } else {
                return tailFactorial(next, curr + next, count - 1);
            }
        };
    return tailFactorial(1, 1, count);
}

var fb4 = (function () {
    var memo = [0, 1];
    var fib = function (n) {
        var result = memo[n];
        if (typeof result !== 'number') {
            result = fib(n - 1) + fib(n - 2);
            memo[n] = result;
        }
        return result;
    };
    return fib;
}());

var memoizer = function (memory, formula) {
    var recur = function (n) {
        var result = memory[n];
        if (typeof result !== 'number') {
            result = formula(recur, n);
            memory[n] = result;
        }
        return result;
    };
    return recur;
}

var fb5 = memoizer([0, 1], function (recur, n) {
    return recur(n - 1) + recur(n - 2);
});

fibonacci(10)