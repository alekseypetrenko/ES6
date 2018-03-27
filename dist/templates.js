"use strict";

var _templateObject = _taggedTemplateLiteral(["Hello ", ""], ["Hello ", ""]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

///////////////////// TEMPLATE STRING
// function greet (name) {
//     console.log(`Hello ${name}`);
// }
// greet("Bill");

// function sendEmail (from, to, subjet, text) {
//     console.log(`
//         From: ${from},
//         To: ${to},
//         Subject: ${subjet},
//         Text: ${text}
//     `);
// }

// sendEmail("Alex", "Anna", "Hello", "Learning templates string");

// function sum (a, b) {
//     console.log(`${a} + ${b} = ${parseInt(a) + parseInt(b)}`);
// }

// sum(2,'4');

///////////////////// Tagged templated literal. Тегирование. Изменени вида шаблона при помощи функции 
// Например можно сделать что бы name выводилось заглавным, пигшем функцию и добавляем ее перед шаблонной строкой
var name = "Bill";
console.log(upperName(_templateObject, name));

function upperName(literals, value) {
    return literals[0] + value.toUpperCase();
}