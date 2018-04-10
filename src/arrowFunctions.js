// es5
// function add(x, y) {
//     return x + y;
// }
// console.log(add(2,5))

//es6
// let add = (x, y) => x + y;
// console.log(add(2,5));

//***********************

//es5
// let square = function(x) {
//     return x * x;
// }
// console.log(square(3)) //9

//es6
// let square = (x) => x*x;
// // если функция принимает только 1 параметр то скобки можно убрать
// // let square = x => x*x;
// console.log(square(3)) 

//***********************

//es5
// если функция не принимает никаких параметров
// let giveMeAnswer = function() {
//     return 42;
// }
// console.log(giveMeAnswer());
//es6
// let giveMeAnswer = () => 42;
// console.log(giveMeAnswer());

//***********************

//es5
// функция не возвращает ничего, а просто выводит сообщение в консоль
// let some = function(){
//     console.log("test");
// }
// some();
//es6
// let some = () => console.log("test");
// some();

//***********************

//es5
// если в функции 2 строки
// let multiply = function(x,y) {
//     let result = x * y;
//     return result;
// }
// console.log(multiply(2,3));
//es6
// {} должны быть, и слово return
// let multiply = (x, y) => {
//     let result = x * y;
//     return result;
// }
// console.log(multiply(2,3));

//***********************

//es5
// если функция возвращает литерал
// let getPerson = function(){
//     return {name: "Bob"};
// }
// console.log(getPerson());
//es6
// если таким образом возвращаем литерал объекта, то его необходимо обернуть в круглые скобки ()
//let getPerson = () => ({name: "Bob"});
//console.log(getPerson());

//***********************

//es5
//Immediately-invoked function expression IIFE
// функция которая объявляется и сразу вызывается
// ее не надо вызывать, она сама себя вызовет
// (function(){
//     console.log("IIFE");
// })();
//es6
//(() = >console.log("IIFE"))();
// => должна идти сразу после параметров
// вот так сработает
// () 
// => console.log...

//***********************
// практическое применение
//es5 сума елементов массива
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0;
// numbers.forEach(function(num){
//     sum +=num;
// })
// console.log(sum)
//es6
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0;
// numbers.forEach(num => sum+=num);
// console.log(sum)

//es5 каждый елемент в квадрат
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let squared = numbers.map(function(x){
//     return x * x;
// })
// console.log(numbers);
// console.log(squared);
//es6
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let squared = numbers.map( x => x * x)
// console.log(numbers);
// console.log(squared);

//***********************
// как работает с объектами
//5
// let person = {
//     name: "Bob",
//     greet: function() {
//         setTimeout(() => {
//             console.log("Hi my name is " + this.name);
//             console.log("this is ", this);
//         }, 1000);
//     }
// }
// person.greet();
//es6
// контекст меняется у стрелочных функций
// let person = {
//     name: "Bob",
//     greet: () => {
//         console.log("Hi my name is " + this.name);
//         console.log(this);
//     }
// }
// person.greet();
