
// Global import 
// Example - Jquery 

(function (globalVariable) {

    // Keep this variables private inside this closure scope
    var privateFunction = function () {
        console.log('Shhhh, this is private!');
    }

    globalVariable.each = function (collection, iterator) {
        if (Array.isArray(collection)) {
            for (var i = 0; i < collection.length; i++) {
                iterator(collection[i], i, collection);
            }
        } else {
            for (var key in collection) {
                iterator(collection[key], key, collection);
            }
        }
    };

    globalVariable.filter = function (collection, test) {
        var filtered = [];
        globalVariable.each(collection, function (item) {
            if (test(item)) {
                filtered.push(item);
            }
        });
        return filtered;
    };

    globalVariable.map = function (collection, iterator) {
        var mapped = [];
        globalUtils.each(collection, function (value, key, collection) {
            mapped.push(iterator(value));
        });
        return mapped;
    };

    globalVariable.reduce = function (collection, iterator, accumulator) {
        var startingValueMissing = accumulator === undefined;

        globalVariable.each(collection, function (item) {
            if (startingValueMissing) {
                accumulator = item;
                startingValueMissing = false;
            } else {
                accumulator = iterator(accumulator, item);
            }
        });

        return accumulator;

    };

}(globalVariable));