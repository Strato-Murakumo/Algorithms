function toBinaryString(num) {
    if (num % 1 !== 0) {
        console.log('请输入整数')
        return;
    }
    let s = ''
    for (let n = num; n > 0; n = Math.floor(n / 2)) {
        s = (n % 2) + s
    }
    return s;
}
console.log(toBinaryString(10))


function toBinaryString(num) {
    if (num % 1 !== 0) {
        console.log('请输入整数')
        return;
    }
    let numList = [];
    while (num > 0) {
        numList.push(num % 2)
        num = Math.floor(num / 2)
    }
    let revertNumList = numList.reverse()
    return revertNumList.join('')
}
console.log(toBinaryString(10))