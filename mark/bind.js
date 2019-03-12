Function.prototype.bind = function (context) {
    let _this = this;
    let args = Array.prototype.slice.call(arguments, 1);
    let F = function () { };   //通过设置一个中转构造函数F，使绑定后的函数与调用bind()的函数处于同一原型链上
    let bound = function () {
        let innerArray = Array.prototype.slice.call(arguments);
        let finalArray = args.concat(innerArray);
        return _this.apply(this instanceof F ? this : this || context, finalArray);
    }
    F.prototype = _this.prototype
    bound.prototype = new F();
    return bound;
}