jQuery('document').ready(function(){
	
    // модальные окна - окна котрые выводятся пользователю

    // вывод предупреждения с текстом.
    // все вычисления приостанавливаются пока пользователь не нажмет ок
    alert('hello world');

    // вопрос с ответом да или нет
    let answer = confirm('are you here?');
    console.log(answer);
    console.log(typeof(answer));

    // вопрос с ответом, который можно написать
    let answer1 = prompt('how old are you?', '18+');
    console.log(answer1);
    console.log(typeof(answer1));
		
	










});