'use strick';
let box = document.querySelector('.box'),
    btn = document.querySelector('button');


let width = box.offsetWidth,                   /*ширина и длина блока*/
    height = box.offsetHeight;

let width1 = box.clientWidth,                    /*ширина и длина контента блока*/
    height1 = box.clientHeight;

console.log(width);
console.log(height);


console.log(box.getBoundingClientRect().top);                   /*размеры и координаты элемента box*/

console.log(document.documentElement.clientHeight);             /*ширина и высота окна*/
console.log(document.documentElement.clientWidth);


btn.addEventListener('click',function(){
    box.scrollTop=0;                                     /*скролит на самый верх*/
    box.scrollBy(0,50);                                  /*скролит вниз от 0 на 50*/
    box.scrollTo(0,50);                                  /*делает так чтобы верхняя яасть под скролом равнялась 50*/
});

