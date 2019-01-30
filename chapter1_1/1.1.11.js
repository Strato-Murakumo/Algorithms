function printBooleanMatrix(matrix = [[], []]) {
    console.table(matrix)
    matrix.forEach((item) => {
        item.forEach((itemCell, index) => {
            if (itemCell) {
                item[index] = '*'
            } else {
                item[index] = ' '
            }
            return itemCell
        })
    })
    console.table(matrix)
}

console.log(printBooleanMatrix([[true, true], [false, true], [false, false]]))