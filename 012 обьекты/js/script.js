'use strick';

// Обьекты

let obj={                                /*создание обьекта*/
    width: 1024,                         /*создание параметров обьекта*/
    height: 1024,
    name: "test"
};
console.log(obj.name);                  /*вызов параметра обьекта*/
obj.bool= false;                        /*создание нового параметра обьекта*/

obj.colors={                            /*создание параметра как обьекта, то есть обьект внутри обьекта*/
    border:"black",
    bg:"red"
};

delete obj.bool;                       /*удаление параметра из обьекта*/

console.log(obj);                      /*вывод самого обьекта*/

for (let i in obj) {
    console.log("Свойство "+i+" имеет значение "+obj[i]);        /*i становится именем параметра  obj*/
};

console.log(Object.keys(obj).length);          /*Object.keys() - параметры обьекта
                                                Object.keys().length - их колличество*/