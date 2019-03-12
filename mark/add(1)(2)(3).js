function add() {
    let args = Array.prototype.slice.call(arguments);

    let fn = function () {
        let args_inner = Array.prototype.slice.call(arguments);
        return add.apply(null, args.concat(args_inner));
    }

    // valueOf和toString方法，在特定的情况下，这俩个方法都会自动调用，而且在用户定义了新的valueof和tostring的时候，会优先执行新的方法。
    fn.valueOf = function () {
        return args.reduce((a, b) => a + b);
    }

    return fn;
}

add(1)(2)(3)