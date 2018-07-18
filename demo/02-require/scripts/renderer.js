define(['jquery', "taskData"], function (jquery, taskData) {


    'use strict';

    // =====[TODO Model]=============
    function Todo(name) {
        this.id = parseInt(Math.random() * 10000);
        this.name = name;
        this.completed = false;
    }



    //=======[Rendering Logic]=========
    var $todoInput = $('#todoInput');
    var $todoList = $('#todoList');
    var $addBtn = $('#addBtn')
    function handleAddTodo() {
        var todoName = $todoInput.val();
        if (!todoName) {
            alert("Enter Todo Value.");
            return;
        }
        var todo = new Todo(todoName);
        addTodo(todo);
        taskData.save(todo);
        $todoInput.val('');
    }
    function addTodo(todo) {
        var className = todo.completed ? "todo checked" : "todo";
        var todoHtml = "<li class='" + className + "' value=" + todo.id + ">" + todo.name + "<div class='close'></div> </li>"
        $todoList.append(todoHtml);
    }
    function handleDeleteTodo(e) {
        var li = $(this).parent();
        taskData.remove(li.attr('value'));
        li.remove();
        e.stopPropagation();
        e.preventDefault();
    }
    function handleTodoClick(e) {
        var li = $(this);
        li.toggleClass("checked");
        taskData.complete(li.attr('value'));
    }

    return {
        renderList: function () {
            var todoList = taskData.getTodo();
            todoList.forEach(function (todo) {
                addTodo(todo);
            });
        },

        attachEvent: function () {
            $addBtn.click(handleAddTodo);
            $todoInput.keydown(function (e) {
                if (e.keyCode === 13) {
                    handleAddTodo();
                }
            });
            $(document).on('click', '.todo', handleTodoClick);
            $(document).on('click', '.close', handleDeleteTodo);
        }
    }
});
