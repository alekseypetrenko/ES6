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
// Например можно сделать что бы name выводилось заглавным, пишем функцию и добавляем ее перед шаблонной строкой


let name = "Bill";
console.log(upp`Hi ${name}`);

function upp(a, b){
   return a[0] + b.toUpperCase();
}