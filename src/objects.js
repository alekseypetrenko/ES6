////////////////////// OBJECTS
// let firstName = "Alex",
//     lastName = "Petrenko",
//     email = "alexpetrenko@gmail.com";

// можно не дублировать, если значение свойств совпадает со значением переменной
// firstName: firstName,
// lastName: lastName

// так же упрощен вариант написания методов
// в ЕС5 они выглядили так
// sayHi: function(){
//     console.log(`Hi my name is ${firstName} ${lastName}`);
// } 
// в ЕС6 убираем слово function и двоеточие
// let person = {
//     firstName,
//     lastName,
//     email,
//     sayHi(){
//         console.log(`Hi my name is ${this.firstName} ${lastName}`);
//     } 
// }

// person.sayHi();

// // Динамически задавать свойства
// function createCar(property, value) {
//     let car = {};
//     car[property] = value;
//     return car;
// }

// console.log(createCar('some', 1));

// let personAge = "Age";

// let person2 = {
//     [personAge]: 22
// }

// console.log(person2);  // Age: 22

// динамически можно указывать свойства, прям в литерале объека

// function someFn(val, el) {
//     return {
//         [val]: el,
//         ["_" + val]: el,   // _vin выведется
//         [val.toUpperCase()]: el  // VIN
//         ["get" + val]() {        // динамически задаем метод
//              return this.val;
//         }
//     }
// }

// console.log(someFn("qwe", 23));  // qwe: 23

let firstName = "Alex",
    lastName = "Petrenko",
    email = "alexpetrenko@gmail.com" 

let person = {
    firstName,
    lastName,
    email,
    sayHi(){
        console.log(`Hi my name is ${this.firstName} ${lastName}`);
    },
    get fullName() {
        return this.firstName + " " + this.lastName;
    },
    set some(value){
        this.firstName = value;
    }
}

Object.defineProperty(person, "fullName", {
    // в ES5 
    // get: function(){
    //     return this.firstName + " " + this.lastName;
    // },
    // set: function(value) {
    //     this.firstName = value;
    // }
    // в ES6 - выше в person 
})

console.log(person);