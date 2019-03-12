/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (numRows === 1) {
        return s;
    }
    //建立模块数组
    let arrList = {};
    for (let i = 0; i < numRows; i++) {
        arrList[i] = [];
    }
    for (let i = 0; i < s.length; i++) {
        let pos = i % (2 * numRows - 2);
        let index = pos < numRows ? pos : 2 * numRows - 2 - pos;
        console.log(index);
        arrList[index].push(s[i]);
    }
    let result = [];
    for (let key in arrList) {
        result = result.concat(arrList[key])
    }
    console.table(arrList)
    return result.join('')
};
console.log(convert('ABCDEF', 3))