var Stack = (function () {
    const arrs = new WeakMap();
    class Stack {
        constructor() {
            arrs.set(this, []);
        }
        // 进栈
        push(element) {
            let s = arrs.get(this);
            s.push(element);
        }
        // 出栈
        pop() {
            if (this.isEmpty()) return console.log('栈已空')
            let s = arrs.get(this);
            return s.pop()
        }
        // 返回栈顶元素
        peek() {
            if (this.isEmpty()) return console.log('栈已空')
            let s = arrs.get(this);
            return s[s.length - 1];
        }
        // 返回栈
        arrayDetail() {
            return arrs.get(this);
        }
        // 返回栈是否为空
        isEmpty() {
            let s = arrs.get(this);
            return s.length == 0;
        }
        // 返回栈长度
        size() {
            let s = arrs.get(this);
            return s.length;
        }
    }
    return Stack;
})()

function fib(n, total) {
    if (n == 1) {
        return total;
    } else {
        return fib(n - 1, n * total)
    }
}
// var inputFormula = '1 2 3 + 4 5 * * +';   //101.0
var inputFormula = '2 3 * 2 1 - / 3 4 1 - * +';   //15

function evaluatePostfix(formula) {
    let formulaArr = formula.split(' ').reverse();
    let vals = new Stack();
    while (formulaArr.length > 0) {
        let v = formulaArr.pop();
        if (v == '+' || v == '-' || v == '*' || v == '/') {
            let val = vals.pop();
            if (v == '+') {
                val = Number(vals.pop()) + Number(val);
            }
            else if (v == '-') {
                val = Number(vals.pop()) - Number(val);
            }
            else if (v == '*') {
                val = Number(vals.pop()) * Number(val);
            }
            else if (v == '/') {
                val = Number(vals.pop()) / Number(val);
            }
            else if (v == '!') {
                val = fib(Number(val, 1))
            }
            vals.push(val);
        } else { vals.push(v); }
    }
    return vals.arrayDetail().join('');
}

console.log(evaluatePostfix(inputFormula));