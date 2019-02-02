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
var inputFormula = '1+2)+3!)*3-4)*5-6)))';

function transformFormula(formula) {
    let formulaArr = formula.split('').reverse();
    let ops = new Stack();
    let vals = new Stack();
    while (formulaArr.length > 0) {
        let v = formulaArr[formulaArr.length - 1];
        if (v == '(') { }
        else if (v == '!' || v == '+' || v == '-' || v == '*' || v == '/') {
            ops.push(formulaArr.pop());
        } else if (v == ')') {
            let op = ops.pop();
            let val = vals.pop();
            if (op == '+' || op == '-' || op == '*' || op == '/') {
                val = '(' + vals.pop() + op + val + ')';
                formulaArr.pop();
            } else if (op == '!') {
                val = '(' + val + op + ')';
            }
            vals.push(val);
        } else {
            vals.push(formulaArr.pop());
        }
    }
    return vals.arrayDetail();
}
console.log(transformFormula(inputFormula));