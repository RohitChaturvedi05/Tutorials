var gl = 10;

function closureEx() {
    var fn1 = 20

    return function () {
        var fn2 = 30
        return gl + fn1 + fn2;
    };
};
var getSum = closureEx();

//getSum();
