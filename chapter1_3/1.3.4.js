// 1.3.4 编写一个Stack的用例Parentheses,从标准输入中读取一个文本流并使用栈判定其中的括号是否配对完整.例如[()]{}{[()]}为true,对于[(])程序则打印false。

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
var params = process.argv.splice(2);
var symbolArr = params[0].split('');
var leftSymbol = {
    '[': 1, '(': 2, '{': 3
}
var rightSymbol = {
    ']': 1, ')': 2, '}': 3
}
var stack = new Stack();

for (var val of symbolArr) {
    if (leftSymbol[val]) {
        stack.push(val);
    } else {
        if (leftSymbol[stack.peek()] == rightSymbol[val]) {
            stack.pop();
        };
    }
}
console.log(stack.isEmpty());

// node 1.3.4.js  {}{}{}{}{}{}
// node 1.3.4.js  {}{}{]{}{}{}
// node 1.3.4.js  {}{}{}{}{}{[