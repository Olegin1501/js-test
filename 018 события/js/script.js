'use strick';


let wrp = document.querySelector('.wrapper'),
    link = document.querySelector('a');
    let btn = document.querySelectorAll('button');    /*у button несколько элементов, получается что button - массив*/

// событие клик на элемент:
btn[0].onclick = function(){
alert('вы нажали первую кнопку!');
}
// так делать правильнее
btn[0].addEventListener('click', function(){
    alert('you pressed the first button!');
});



btn[0].addEventListener('click',function(event){
    let tr = event.target;                                  /*event.target -сам элемент на который наводится действие*/
    tr.style.display= 'none';                                                   /*скрытие при выполнении функции выше*/
    console.log('произошло событие '+event.type+' на элементе '+event.target);  /*event.type - само действие*/ 
});

link.addEventListener('click', function(event){
    event.preventDefault();                                                         /*отмена href для ссылки*/
    console.log('произошло событие '+event.type+' на элементе '+event.target);
});




// перебор всех элементов массива
for (let i=0; i<btn.length; i++){
    btn[i].addEventListener('mouseleave',function(){
        console.log('вышли');
    });
};
// так делать правильнее:
btn.forEach(function(item){
    item.addEventListener('mouseleave', function(){
        console.log('вышли');
    });
});
