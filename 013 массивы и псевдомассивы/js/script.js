'use strick';

// Массивы

let arr = ["a1","a2","a3","a4","a5","a6"]                    /*создание массива*/
arr.pop();                                                   /*удаление последнего элемента массива*/
arr.push(6);                                                 /*добавление элемента в конец массива*/

arr.shift();                                                 /*удаление первого элемента массива*/
arr.unshift(1);                                              /*добавление элемента в конец массива*/
console.log(arr);

for (let i=0; i<arr.length; i++){                            /*перебирание параметров массива*/
    console.log(arr[i]);
}

arr.forEach(function(item,i,mass){
    console.log("элемент массива_"+(i+1)+": "+ item+" из массива["+ mass+ "]");                 /*item -параметр; i -его номер; mass -массив, то есть arr*/
});


let m=['a1','a2','a3','a4','a5'];                       /*i in mass - перебирает индексы параметров*/
for (let k in m){
    console.log(k);
}

let m1=['a1','a2','a3','a4','a5'];                       /*i of mass - перебирает сами параметры*/
for (let k1 of m1){
    console.log(k1);
}

let answ = prompt("",""),
    arr1 = [];
arr1 = answ.split(',');                                  /*split - разделение ',' - означает что разделитетелем будет запятая*/
console.log(arr1);

let arr2 = ['sfds','sdf','sd','sdf','sfs'],
    i2 = arr2.join(', ');                                /* join - обьединяет параметры массива*/
console.log(i2);

let arr3 = ['sfds','sdf','sd','sdf','sfs'],
    i3 = arr3.sort();                                   /* sort - сортирует параметры массива по алфавиту, т.е. как строки*/
console.log(arr3);

let arr4 = [1,15,3,5,19,8],
    i4 = arr4.sort(SortNum);                            /* чтобы sort сортировал массив как числа а не строки нужно обьявить новую функцию как в примере*/
function SortNum(a,b){
    return a-b;
};
console.log(arr4);
