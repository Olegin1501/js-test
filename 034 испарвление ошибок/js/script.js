'use strick';
try {
    console.log('начинаем работу');             /*если нет ошибки выполняется этот блок а catch игнорируется*/
    console.log(a);
    console.log('результат');
} catch(error) {
    console.log(error.name);                    /*если есть ошибка в try выполняется этот блок*/
    console.log(error.message);                 /*так выводится ошибка которая была в try*/
    console.log(error.stack);
    console.log(`мы получили ошибку: ${error.name}, это значит: ${error.message}, ошибка находится: ${error.stack}`);
    
}

console.log('а я буду работать дальше');