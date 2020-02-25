'use strick';
let bx = document.getElementById('box1'),                       /*присвоить из html по ID */
    btn = document.getElementsByTagName('button'),              /*присвоить из html по названию тэга */
    circle = document.getElementsByClassName('circle'),         /*присвоить из html по классу */
    heart = document.querySelectorAll('.heart'),                /*присвоить из html */
    OneHeart = document.querySelector('.heart');                /*присвоить из html первый из элементов*/
    wrp = document.querySelector('.wrapper');

bx.style.backgroundColor = 'blue';                              /*поменять свойство CSS background-color*/

btn[1].style.borderRadius = '100%';                             /*поменять свойство CSS border-radius для 2 элемента*/

circle[0].style.backgroundColor = 'red';                        /*поменять свойство CSS */
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';

for (let i =0; i<heart.length; i++){                            /*поменять свойство CSS для всех элементов методом перебора */
    heart[i].style.backgroundColor = 'blue';
}

heart.forEach(function(item,i,hearts){                          /*то же самое но другим методом */
    item.style.backgroundColor = 'red';
})

let dv = document.createElement('div'),                        /*создание нового элемента div*/
    text = document.createTextNode('Я ту трубу шатал!');
console.log(text);

dv.classList.add('black');                                      /*добавили класс для div*/
console.log(dv);


document.body.appendChild(dv);                                  /*вставили div в конец body html документа*/
wrp.appendChild(dv);                                            /*вставили div в конец  .wrapper*/
document.body.insertBefore(dv,circle[1]);                       /*вставили div в body перед .circle[1]*/
document.body.removeChild(circle[2]);                           /*в body удалили  .circle[2]*/
document.body.replaceChild(btn[1],circle[1]);                   /*заменили circle[1] на btn[1]*/

dv.innerHTML = '<h3>Hello World!</h3>';                         /*добавить текст в div*/
dv.textContent = '<h3>Hello World!</h3>';                       /*лучше писать так*/