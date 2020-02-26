'use strick';

let timerId = setTimeout(sayHello,3000);
clearTimeout(timerId);                              /*сброс времени*/

function sayHello(){
    console.log('Hello World!');
};

let timerId1 = setInterval(sayHello,3000);
clearTimeout(timerId1);

let timerId2 = setTimeout(function log(){           /*Рекурсивный метод задания таймаута*/
    console.log('hello!');
    setTimeout(log,2000);
});

let btn = document.querySelector('button'),
    elem = document.querySelector('.box');

function myAnimation(){
    let pos=0;

    let id = setInterval(frame,10);
    function frame(){
        if (pos==300){
            clearInterval(id)
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
};
btn.addEventListener('click', myAnimation );

let btnBlock = document.querySelector('.container_2'),
    btns = document.querySelectorAll('.container_2__item');

    btnBlock.addEventListener('click',function(event){
        if (event.target && event.target.tagName=='BUTTON'){
            console.log('hello, you pressed yellow button');
        } else {console.log('hello, you pressed buttons container')}
    });