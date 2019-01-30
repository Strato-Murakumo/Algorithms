var params = process.argv.splice(2);   //接受命令行输入参数值  删除其中的node命令行 js文件

function printTable(name, m, n) {
    if (m % 1 != 0 || n % 1 != 0) {
        console.log('请输入整数');
        return;
    }
    return [name, m, n, (m / n).toFixed(3)]
}

console.table(printTable(params[0], params[1], params[2]))