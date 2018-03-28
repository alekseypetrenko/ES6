///////////////////// SPREAD
// let staticLanguages = ["C", "Java", "C++"];
// let dynamicLanguages = ["JS", "Ruby", "PHP"];

// если подставлять так, то выведутся массивы, а не их елементы
// let otherLanguages = [staticLanguages, "Python", dynamicLanguages, "C#"];
// console.log(otherLanguages);

// Добавление ... решает проблему, babel конвертирует это в оператор concat на пусстом массиве в котором все массивы соединяются по порядку
// var otherLanguages = [].concat(staticLanguages, ["Python"], dynamicLanguages, ["C#"]);
// let otherLanguages = [...staticLanguages, "Python", ...dynamicLanguages, "C#"];
// console.log(otherLanguages);

// function sum (a , b, c) {
//     console.log(a + b + c);
// }

// let arr = [1,2,3];
// sum(...arr); 


///////////////////// REST
// function a(...b) {
//     console.log(b);
// }

// a(1,2,34);

// function sum(...args) {
//     return args.reduce(
//         (res, item) => res + item
//     );
// }

// console.log(sum(2,3,4,5));