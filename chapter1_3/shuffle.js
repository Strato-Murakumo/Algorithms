// 写下从 1 到 N 的数字
// 取一个从 1 到剩下的数字（包括这个数字）的随机数 k
// 从低位开始，得到第 k 个数字（这个数字还没有被取出），把它写在独立的一个列表的最后一位
// 重复第 2 步，直到所有的数字都被取出
// 第 3 步写出的这个序列，现在就是原始数字的随机排列

Array.prototype.shuffle = function () {
    var arr = this;
    for (var i = 0; i < arr.length - 1; i++) {
        [arr[Math.floor(Math.random() * (i + 1))], arr[i]] = [arr[i], arr[Math.floor(Math.random() * (i + 1))]]
    }
    return arr;
}

console.log([1, 2, 3, 4, 5, 6, 7, 8].shuffle());
