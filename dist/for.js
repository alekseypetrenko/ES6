"use strict";

var browsers = ["Chrome", "FF", "Safari", "IE"];

// выведутся номера ключей массива
for (var index in browsers) {
    console.log(index);
}

// выведутся значения 
for (var _index in browsers) {
    console.log(browsers[_index]);
}

// но можно сделать проще, собственно цикл for of
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = browsers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _index2 = _step.value;

        console.log(_index2);
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

console.log(browsers);