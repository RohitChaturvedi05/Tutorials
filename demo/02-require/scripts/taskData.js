define(function () {
    'use strict';

    // ======[SAVING LOGIC]============
    var todoStorageName = "Todo_Storage";

    function save(todo) {
        var storage = JSON.parse(localStorage.getItem(todoStorageName)) || [];
        storage.push(todo);
        localStorage.setItem(todoStorageName, JSON.stringify(storage));
    }
    function remove(id) {
        id = parseInt(id);
        var storage = JSON.parse(localStorage.getItem(todoStorageName)) || [];

        var newStorage = storage.filter(function (todo) {
            return todo.id !== id
        });
        localStorage.setItem(todoStorageName, JSON.stringify(newStorage));

    }
    function complete(id) {
        id = parseInt(id);
        var storage = JSON.parse(localStorage.getItem(todoStorageName)) || [];
        var todo = storage.find(function (todo) { return todo.id === id });
        if (todo) {
            todo.completed = !todo.completed;
        }
        localStorage.setItem(todoStorageName, JSON.stringify(storage));
    }
    function getTodo() {
        var storage = JSON.parse(localStorage.getItem(todoStorageName)) || [];
        return storage;
    }
    return {
        save,
        remove,
        complete,
        getTodo
    }
});
