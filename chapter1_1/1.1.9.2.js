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