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
            if (this.isEmpty()) return false;
            let s = arrs.get(this);
            return s.pop()
        }
        // 返回栈顶元素
        peek() {
            if (this.isEmpty()) return false;
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
var inputFormula = '2 * 3 / ( 2 - 1 ) + 3 * ( 4 - 1 )';   //2 3 * 2 1 - / 3 4 1 - * +
// var inputFormula = '( 1 + ( ( 2 + 3 ) * ( 4 * 5 ) ) )';   //1 2 3 + 4 5 * * +
// 中序转后序算法
// 1、当输入的是操作数时候，直接输出
// 2、当输入开括号时候，把它压栈
// 3、当输入的是闭括号时候，先判断栈是否为空，若为空，则发生错误并进行相关处理。若非空，把栈中元素依次出栈输出，直到遇到第一个开括号，若没有遇到开括号，也发生错误，进行相关处理
// 4、当输入是运算符op（+、- 、×、/）时候
// a)循环，当（栈非空and栈顶不是开括号and栈顶运算符的优先级不低于输入的运算符的优先级）时，反复操作：将栈顶元素出栈输出
// b)把输入的运算符op压栈
// 5、当中序表达式的符号序列全部读入后，若栈内仍有元素，把他们依次出栈输出。若弹出的元素遇到空括号，则说明不匹配，发生错误，并进行相关处理
function infixToPostfix(formula) {
    let formulaArr = formula.split(' ').reverse();
    let maps = {
        '+': 1,
        '-': 1,
        '/': 2,
        '*': 2,
        '(': 0,
        ')': 0,
    }
    let ops = new Stack();
    let vals = new Stack();
    while (formulaArr.length > 0) {
        let v = formulaArr.pop();
        if (v == '(') {
            // 当输入开括号时候，把它压栈
            ops.push(v)
        } else if (v == ')') {
            while (ops.peek() != '(') {
                vals.push(vals.pop() + ' ' + ops.pop())
            }
            ops.pop();
        } else if (v == '+' || v == '-' || v == '*' || v == '/') {
            while (!ops.isEmpty() && maps[v] <= maps[ops.peek()]) {
                vals.push(vals.pop() + ' ' + ops.pop());
            }
            ops.push(v);
        } else {
            // 当输入的是操作数时候，直接输出
            if (vals.isEmpty()) { vals.push('') }
            vals.push(vals.pop() + ' ' + v);
        }
    }
    while (!ops.isEmpty()) {
        vals.push(vals.pop() + ' ' + ops.pop());
    }
    return vals.arrayDetail().join('');
}
console.log(infixToPostfix(inputFormula));