class Task {
    constructor(title){
        this._title = title;
        this.done = false;
        Task.count += 1;
        console.log("Создание задачи");
    }
    get title(){
        return this._title;
    }
    set title(value){
        this._title = value;
    }
    static getDefTitle(){
        return "Задача"
    }
    complete(){
        this.done = true;
        console.log(`Задача "${this.title}" выполнена`)
    }
}

Task.count = 0;

class SubTask extends Task {
    constructor(title, parent) {
        super(title);
        this.parent = parent;
        console.log("Создание подзадачи");
    }
    complete(){
        super.complete();
        console.log(`Подзадача "${this.title}" выполнена`)
    }
}

let task = new Task("Изучить JS");
let subtask = new SubTask("Изучить ES6", task);

console.log(SubTask.getDefTitle());
console.log(SubTask.count);


task.complete();
subtask.complete();


console.log(task);
console.log(subtask);

