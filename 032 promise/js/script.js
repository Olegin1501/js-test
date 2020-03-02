'use strick';
// let drink = 0;

// function shoot(arrow, headshot, fail){
//     console.log('вы сделали выстрел...');
//     setTimeout(function(){
//         Math.random()>.5 ? headshot({}) : fail('вы промахнулись');
//     },3000)
// };

// function win(){
//     console.log('вы победили!');
//     (drink==1) ? buyBeer() : giveMoney();
// };
// function loose(){
//     console.log('вы проиграли!');
// };
// function buyBeer(){
//     console.log('вам купили пиво');
// }
// function giveMoney(){
//     console.log('вам дали деньги');
// }

// shoot({},
//     function(mark){
//         console.log('вы попали в цель!');
//         win(mark,buyBeer,giveMoney);
//     },
//     function(miss){
//         console.error(miss);
//         loose();
//     });




function shoot(arrow){
    console.log('вы сделали выстрел...');
    let promise = new Promise(function(resolve,reject){                             /*создание промиса*/
        setTimeout(function(){
            Math.random()>.5 ? resolve({}) : reject('вы промахнулись');             /*resolve - да reject -нет */
        },3000);
    });
   return promise;                                                                  /*возвращаем нашей функции промис*/
};

function win(){
    console.log('вы победили!');
    (drink==1) ? buyBeer() : giveMoney();
};
function loose(){
    console.log('вы проиграли!');
};
let drink = 0;
function buyBeer(){
    console.log('вам купили пиво');
};
function giveMoney(){
    console.log('вам дали деньги');
};

shoot({})
        .then(mark=>console.log('вы попали в цель!'))           /*сначала выполняется это*/
        .then(win)                                              /*потом это*/
        .catch(loose);                                          /*выполняется это если не было выполнено условие*/