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
        // 类似的，如果实现的队列，出队操作应该先翻转数组，出队，再翻转，而非直接使用
        // unshift()操作，有利于效率提升
        pop() {
            let s = arrs.get(this);
            return s.pop()
        }
        // 返回栈顶元素
        peek() {
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

module.exports = { Stack };