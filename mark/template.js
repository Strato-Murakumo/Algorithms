let template = '我是{name}，年龄{age}，性别{sex}';
let data = {
    name: '小明',
    age: 18,
}
const reg = /({([a-zA-Z]+)})/g;
var r = '', regrounp = {};
while (r = reg.exec(template)) {
    Object.defineProperty(regrounp, r[2], {
        enumerable: true,
        value: r[2]
    })
}

var render = (template, regrounp) => {
    var result = '';
    for (key in regrounp) {
        if (data[key] == undefined) {
            result = (result || template).replace(new RegExp(`{${regrounp[key]}}`, "g"), undefined);
        } else {
            result = (result || template).replace(new RegExp(`{${regrounp[key]}}`, "g"), data[key]);
        }
    }
    return result
}
let newtemple = render(template, regrounp);
console.log(newtemple) // 结果： 我是小明，年龄18，性别undefined