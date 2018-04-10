// Свойства указываются только в constructor (в ЕС6; позже может исправят)
// Статические свойства - те свойства, которые пренадлежат самим классам, 
// а не объектам созданным на его основе (аналогично методы). Часто используются для хранения вспомогательной информации
// Объявляются вне класса, чеерз имя класса.имя свойства (Task.count)

// class Task {
//     constructor(title = Task.getDefaultTitle()) {
//         this.title = title;
//         this._done = false;
//         Task.count = Task.count + 1;
//         console.log("Task creating");
//     }
//     get done(){
//         return this._done === true ? "Выполнена" : "Не выполнена";
//     }
//     set done(value){
//         if (value !== undefined && typeof value === `boolean`) {
//             this._done = value;
//         } else {
//             console.error("Ошибка! Укажите тру или фолс")
//         }
//     }
//     complete(){
//         this.done = 1;
//         console.log(`Задача "${this.title}" выполнена`)
//     }

//     static getDefaultTitle(){
//         return `Задача`;
//     }
// }

// Task.count = 0;

// let task = new Task("Убрать комнату");
// let task2 = new Task("Купить продукты");
// let task3 = new Task();

// console.log(task.title);
// console.log(task2.title);
// console.log(task3.title);
// task2.complete();
// console.log(Task.count);
// console.log(Task.getDefaultTitle());

// console.log(task.done, task._done);
// task.complete();
// console.log(task.done, task._done);
"use strict";