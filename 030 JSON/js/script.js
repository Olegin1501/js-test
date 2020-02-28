'use strick';
// let options={
//     width:1366,
//     height:768,
//     background:'red',
//     font:{
//         size:'16px',
//         color:'#fff'
//     }
// };

// console.log(JSON.parse(JSON.stringify(options)));

let inputRub = document.getElementById('rub'),            /*привязываем поля ввода HTML в JS переменную*/
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input',()=>{                    /*при вводе текста в input html вызовется функция*/
    let request = new XMLHttpRequest();                    /*заносим в переменную новый запрос с сервера*/

    // request.open(method,url,async,login,pass);   /*метод(GET/POST), адрес, синхронность(да/нет),логин, пароль сервера*/

    request.open('GET','js/current.json',);     /*GET -получаем инфу от сервера, адрес сервера*/
    request.setRequestHeader('Content-type','application/json; charset=utf-8');     /*настройки запроса*/
    request.send();                 /*то что нужно отослать на сервер*/

    request.addEventListener('readystatechange', function(){
        if (request.readyState===4 && request.status==200) {
            let data = JSON.parse(request.response);

            inputUsd.value=inputRub.value/data.usd;
        }
        else{
            inputUsd.value = "Что то пошло не так";
        }
    });
});

// status - код
// statusText - описание кода
// responseText / response
// readyState
// 
// 