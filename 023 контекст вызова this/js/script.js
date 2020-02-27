'use strick';

// function ShowThis(a,b){                          
//     console.log(this);                               /*просто вызов функции - window/undefined*/
//     function sum(){
//         console.log(this);
//         return a+b;
//     }
//     console.log(sum());
// }
// ShowThis(4,5);
// ShowThis(3,2);

// let obj = {
//     a:20,
//     b:15,
//     sum: function(){
//         console.log(this);                          /*конструктор (new) - this = новый созданный объект*/
//         function shout(){
//             console.log(this);                      /*просто вызов функции - window/undefined*/
//         }
//         shout();
//     }
// }
// obj.sum();

// let user={
//     name: 'John'
// }
// function sayName(){
//     console.log(this);
//     console.log(this.name);
// }
// console.log(sayName.call(user));                    /*указание конкретного контекста - call, apply*/
// console.log(sayName.apply(user));

// function count(number){
//     return this*number;
// }
// let res = count.bind(2);                            /*указание конкретного контекста - bind . bind=this*/
// console.log(res(4));
// console.log(res(3));

let btn = document.querySelector('button');

btn.addEventListener('click',function(){
    console.log(this);
    this.style.backgroundColor='red';
    function ShowThis(){
        console.log(this);
    }
    ShowThis();
})


// 1) просто вызов функции - window/undefined
// 2) метод обьекта - this = объект
// 3) конструктор (new) - this = новый созданный объект
// 4) указание конкретного контекста - call, apply, bind