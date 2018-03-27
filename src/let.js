///////////////////// LET

// console.log(a);
// let a = "var";

var allButtons = document.querySelectorAll('button');

// если в цыкле указываем var, то создается общая i для все функции, по этому при клике на кнопку в консоле выводится 5, а не ее номер. Добавление let решает эту проблему
// для наглядности - var i; for (i = 0; ... и т.д.)

for (var i = 0; i < allButtons.length; i++) {
    var singleButton = allButtons[i];
    singleButton.innerText = i;
    singleButton.onclick = function(e) {
        console.log(i);
    }
}


///////////////////// CONST
// так же как и let нельзя вызывать до объявления

const PI = 3.14;
// PI = 4 - ошибка

// если const объявлена как свойство объекта, мы можем ее поменять, т.к. в новой переменной будет находиться ссылка на объект

const MATH = {
    PI: 3.14
};

MATH.PI = 4;
console.log(MATH.PI);
