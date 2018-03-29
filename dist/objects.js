"use strict";

////////////////////// OBJECTS
var firstName = "Alex",
    lastName = "Petrenko",
    email = "alexpetrenko@gmail.com";

// можно не дублировать, если значение свойств совпадает со значением переменной
// firstName: firstName,
// lastName: lastName

// так же упрощен вариант написания методов
// в ЕС5 они выглядили так
// sayHi: function(){
//     console.log(`Hi my name is ${firstName} ${lastName}`);
// } 
// в ЕС6 убираем слово function и двоеточие
var person = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    sayHi: function sayHi() {
        console.log("Hi my name is " + this.firstName + " " + lastName);
    }
};

person.sayHi();

function createCar(property, value) {
    var car = {};
    car[property] = value;
    return car;
}

console.log(createCar('some', 1));