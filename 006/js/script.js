'use strick';

// операторы + - / *

let arr = ['orange', 'apple', 'pineapple'];
console.log('arr' + '-object');
console.log(4 + '-object');

// когда перед присвоением ставится +, елемент становится числом
let answer = +prompt('how old are you?', '18+');
console.log(typeof (answer));

// еще один + прибавляет 1, -- -убавляет 1
let incr = 10,
    decr = 10;
incr++;
decr--;
console.log(++incr);
console.log(--decr);

// остаток от деления %
console.log(5 % 2);

// = - присвоение, == - сравнивание, === - сравнивание типов
console.log('2' == 2);

// оператор И &&  оператор ИЛИ ||  ! - знак отрицания
let isChecked = true,
    isClose = false;
console.log(isChecked && isClose);
console.log(isChecked || isClose);