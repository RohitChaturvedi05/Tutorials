var test = {
    prop: 42,
    func: function () {
        return this.prop;
    }.bind(window),
};

console.log(test.func());