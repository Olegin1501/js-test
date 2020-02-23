'use strick';

// Функции

// Create a function

function ShowFirstText(text){
    alert(text+' - is my message');    
};

// function call
ShowFirstText('hello world');

// свойство return - возвращает действие
function Calc1(a,b) {
    return (a+b);
}
console.log('3+4= ',Calc1(3,4));
console.log('5+6 =',Calc1(5,6));

// то же самое, но в другом написании
let Calc2 = (a,b) => a+b;

console.log('6+6 =',Calc2(6,6));
console.log('7+8 =',Calc2(7,8));

// вывод внутренней переменной наружу функции
function RetVar() {
    let num=50;
    return num;
}
let a1=RetVar();
console.log(a1);

// .length возвращает длину строки
let str='test-test';
console.log(str.length);

// .toUpperCase() - возвращает заглавные буквы
console.log(str.toUpperCase());
console.log(str.toLowerCase());


