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
var inputFormula = '((1+2)*((3-4)*(5-6)))';

function infixToPostfix(formula) {

}
console.log(infixToPostfix(inputFormula));