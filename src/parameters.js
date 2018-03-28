///////////////////// Default parameters. Если в функцию ничего не будет передано, то что быне возвращался undefined
// function greeting(greet = "Hola", name = "Dan") {
//     console.log(`${greet}, ${name}`);
// }

// greeting("Hi", "Bill");
// greeting("Hi");
// greeting(undefined, "Bill");
// greeting(undefined, undefined);


///////////////////// REST
// если не знаем сколько аргументов будет, раньше использовали arguments, но это не массив.
// функция ниже показывает как можно сложить все числа
// function sum(){
//     let sum = 0;
//     Array.prototype.forEach.call(arguments, function(e){
//         sum +=e;
//     })
//     console.log(sum);
// }
// sum(1,2,3,4);

// т.к. REST складывает параметры в массив, то можем применяить непосредственно к параметру params метод forEach()
// function sum2(...params) {
//     let sum2 = 0;
//     params.forEach(function(e){
//         sum2 += e;
//     })
//     console.log(sum2);
// }

// sum2(1,2,3,4);

// так же можно юзать метод reduce()
function sum2(...params) {
    console.log(params.reduce(function(a, b) {
        return a + b;
    }));
    
}

sum2(1,2,3,4,5);