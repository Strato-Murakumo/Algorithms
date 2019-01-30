Array.prototype.shuffle = function () {
    let m = this.length, i;
    while (m) {
        i = (Math.random() * m--) >>> 0;    //去除小数点
        [this[m], this[i]] = [this[i], this[m]]
    }
    return this;
}

var params = process.argv.splice(2);
var M = parseInt(params[0]), N = parseInt(params[1]);
shuffleTest(M, N);
function shuffleTest(M, N) {
    if (M % 1 != 0 || N % 1 != 0) {
        console.error('请输入整数');
        return;
    }
    var a = (new Array(M)).fill(0);
    var num = [];
    // 创建二维数组
    for (let k = 0; k < M; k++) {
        num[k] = (new Array(M)).fill(0);
    }
    console.log(num)
    for (let i = 0; i < N; i++) {
        // 每次初始化之前都将数组初始化为a[i] = i
        for (let j = 0; j < M; j++) {
            a[j] = j;
        }
        a = a.shuffle();
        // 打乱后落在位置j的次数
        for (let x = 0; x < M; x++) {
            num[x][a[x]]++;
        }
    }
    console.table(num);
}