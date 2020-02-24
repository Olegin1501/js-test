

// CALL BACK функции

function first(){
    setTimeout(function(){console.log(1);},500);
};

function second(){
    console.log(2);
};

first();
second();
// вторая функция выполняется раньше, чем первая, хотя записано наоборот. 
// Чтобы это предотвратить делают следующее:

function LearnJS (lang, callback){
    console.log('I learn '+ lang);   /*выполнение первой функции*/
    callback();                      /*выполнение второй функции*/
}
function done(){
    console.log('3-rd lesson is complete!');          /*создали новую функцию*/
}
LearnJS('JavaScript', done);           /*во 2-й параметр функции мы вставили вновь созданную функцию*/
// таким образом в функции LearJS сначала выполнится 
// console.log('I learn '+ lang); только потом
// функция callback(), вместо нее вызовется функция done();