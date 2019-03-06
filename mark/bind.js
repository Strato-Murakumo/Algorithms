Function.prototype.bind = Function.prototype.bind || function (context) {
    let _this = this;
    let args = Array.prototype.slice.call(arguments, 1);
    let F = function () { };
    let bound = function () {
        let innerArray = Array.prototype.slice.call(arguments);
        let finalArray = args.concat(innerArray);
        return _this.apply(this instanceof F ? this : this || context, finalArray);
    }
    bound.prototype = new F();
    return bound;
}