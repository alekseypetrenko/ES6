"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Свойства указываются только в constructor (в ЕС6; позже может исправят)
// Статические свойства - те свойства, которые пренадлежат самим классам, 
// а не объектам созданным на его основе (аналогично методы). Часто используются для хранения вспомогательной информации
// Объявляются вне класса, чеерз имя класса.имя свойства (Task.count)

var Task = function () {
    function Task() {
        var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Task.getDefaultTitle();

        _classCallCheck(this, Task);

        this.title = title;
        this._done = false;
        Task.count = Task.count + 1;
        console.log("Task creating");
    }

    _createClass(Task, [{
        key: "complete",
        value: function complete() {
            this.done = 1;
            console.log("\u0417\u0430\u0434\u0430\u0447\u0430 \"" + this.title + "\" \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0430");
        }
    }, {
        key: "done",
        get: function get() {
            return this._done === true ? "Выполнена" : "Не выполнена";
        },
        set: function set(value) {
            if (value !== undefined && typeof value === "boolean") {
                this._done = value;
            } else {
                console.error("Ошибка! Укажите тру или фолс");
            }
        }
    }], [{
        key: "getDefaultTitle",
        value: function getDefaultTitle() {
            return "\u0417\u0430\u0434\u0430\u0447\u0430";
        }
    }]);

    return Task;
}();

Task.count = 0;

var task = new Task("Убрать комнату");
// let task2 = new Task("Купить продукты");
// let task3 = new Task();

// console.log(task.title);
// console.log(task2.title);
// console.log(task3.title);
// task2.complete();
// console.log(Task.count);
// console.log(Task.getDefaultTitle());

console.log(task.done, task._done);
task.complete();
console.log(task.done, task._done);