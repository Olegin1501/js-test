'use strick';
localStorage.setItem('number',1)                /*записываем новое значение в локальный сервер*/
console.log(localStorage.getItem("number"));    /*получаем значение из локального сервера*/
localStorage.removeItem("number")               /*удаление из локального сервера*/
localStorage.clear();                           /*очистить весь локальный сервер*/

window.addEventListener("DOMContentLoaded", function(){

    let chbx = document.querySelector('#rememberMe');

    if (localStorage.getItem("isChecked")==="true"){
        chbx.checked=true;
    }

    chbx.addEventListener('click', function(){
        localStorage.setItem("isChecked",true);
    })

    let persone = {
        name: 'Alex',
        age:25,
        tech: ['cell phone', 'laptop']
    }

    let serializedPersone = JSON.stringify(persone);
    localStorage.setItem('Alex',serializedPersone);

    console.log(JSON.parse(localStorage.getItem("Alex")));












})