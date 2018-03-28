let browsers = ["Chrome", "FF", "Safari", "IE"];

// выведутся номера ключей массива
for (let index in browsers) {
    console.log(index);
}

// выведутся значения 
for (let index in browsers) {
    console.log(browsers[index]);
}

// но можно сделать проще, собственно цикл for of
for (let index of browsers) {
    console.log(index);
}

console.log(browsers);