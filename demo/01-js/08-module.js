
var myModule1 = (function () {
    'use strict';
    return {
        publicMethod: function () {
            return 'Hello World!';
        }
    };
}());



var myModule2 = (function (dependency) {
    'use strict';
    return {
        logger: function () {
            var msg = dependency.publicMethod();
            console.log(msg);
        }
    };
}(myModule1));
