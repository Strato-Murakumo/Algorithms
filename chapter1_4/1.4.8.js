// 1.4.8 编写一个程序,计算输入文件中相等的整数对的数量.如果你的第一个程序是平方级别的,请继续思考并以Array.sort()给出一个线性对数级别的解答

function calSame(arr = []) {
    let total = 0;
    for (let i of arr) {
        for (let j of arr) {
            if (i == j) {
                total++;
            }
        }
    }
    return total;
}

function calSameBetter(arr = []) {
    let total = 0;
    arr.sort();
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] == arr[i + 1]) {
            total++;
        }
    }
    return total;
}