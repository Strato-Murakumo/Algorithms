/**
*

@param {Array} arr 需要扁平化的数组
@param {Number} [depth=1] 扁平化深度
@return {Array} 扁平化后的新数组
*/
function flatten(arr, depth = 1) {
    return arr.reduce((newArr, nextArr) => newArr.concat(depth > 1 && Array.isArray(nextArr) ? flatten(nextArr, depth - 1) : nextArr), [])
}