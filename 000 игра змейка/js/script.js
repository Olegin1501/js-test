const cnv = document.querySelector('#game'),        /*вытаскиваем canvas из html*/
    ctx = cnv.getContext('2d'),                     /*|*/
    groundImg = new Image(),                            /*задаем картинки для поля и еды змейки*/
    foodImg = new Image(),                              /*|*/
    bx = 32;                                    /*задаем шаг змейки*/
groundImg.src = '../img/1.png';
foodImg.src = '../img/2.png';
let score = 0,                                  /*задаем счет игры, вначале он равен 0*/
    food = {
        x: Math.floor(Math.random()*17+1)*bx,               /*задаем положение еды рандомом*/
        y: Math.floor(Math.random()*15+3)*bx                /*|*/
    },                                                      /*|*/
    snake = [],                                     /*задаем змейку как массив, вначале он пустой*/
    dir;                                    /*в эту переменную будем заносить нажатие клавиш управления*/

snake[0]={                              /*задаем начальное положение нашей змейки*/
    x:9*bx,                             /*|*/
    y:10*bx                             /*|*/
};                                      /*|*/    

document.addEventListener('keydown', function(event){               /*при нажатии любой клавиши сработает функция*/
    if (event.keyCode == 37 && dir!='right')                        /*присваивание dir нажатой клавиши управления*/
        dir = 'left';                                               /*|*/
    else if (event.keyCode == 38  && dir!='down')                   /*|*/
        dir = 'up';                                                 /*|*/
    else if (event.keyCode == 39  && dir!='left')                   /*|*/
        dir = 'right';                                              /*|*/
    else if (event.keyCode == 40  && dir!='up')                     /*|*/
        dir = 'down';                                               /*|*/
});                                                                 /*|*/

function eatSelf(head, snk){                                    /*|*/
    for (let i=0; i<snk.length; i++){                           /*после того как голова змейки head встретится*/
        if (head.x==snk[i].x && head.y==snk[i].y){              /*с ее телом snk*/
            clearInterval(game);                                /*прекратится действие setInterval, то есть игра закончится*/
        }                                                       /*|*/
    }                                                           /*|*/
}

function drawGame(){                                        /*функция отрисовки игры*/
    ctx.drawImage(groundImg, 0, 0);                             /*отрисовка поля*/
    ctx.drawImage(foodImg, food.x, food.y);                     /*отрисовка еды, координаты см выше food*/
    
    for (let i=0; i<snake.length;i++){                      /*отрисовка змейки*/
        ctx.fillStyle = i==0 ? 'green' : 'gray';            /*цвет змейки, если 1-й эл, то зеленый; если не1-й - серый*/
        ctx.fillRect(snake[i].x, snake[i].y, bx, bx);       /*змейка как квадрат (ккординаты, размеры)*/
    }                                                       /*|*/

    ctx.fillStyle = 'white';                            /*отрисовка счета игры score*/
    ctx.font = '32px arial';                            /*|*/
    ctx.fillText(score, 2*bx, 1.6*bx);                  /*|*/

    let snakeX = snake[0].x,                    /*задаем координаты змейки и присваиваем им начальное положение*/                            
        snakeY = snake[0].y;                    /*|*/
    
    if (snakeX==food.x && snakeY==food.y) {          /*если змейка доходит до еды, т.е. координаты змейки = координаты еды*/
        score++;                                        /*то счет увеличивается на 1*/
        food = {                                        /*и еда перемещается на другое рандомное место*/
            x: Math.floor(Math.random()*17+1)*bx,       /*|*/
            y: Math.floor(Math.random()*15+3)*bx        /*|*/    
        }                                               /*|*/
    }                                                   /*|*/
    else {snake.pop()};                              /*если нет, то удаляется последний элемент массива змейки*/
    
    if (snakeX<bx || snakeX>17*bx || snakeY<3*bx || snakeY>17*bx){  /*если змейка выходит за рамки поля*/
        clearInterval(game);                                        /*то прекращается setInterval, т.е. gameOver*/
    }                                                               /*|*/

    if (dir == 'left')                              /*перемещение змейки, зависимость от нажатых клавиш*/
        snakeX -= bx;                               /*|*/
    if (dir == 'right')                             /*|*/
        snakeX += bx;                               /*|*/
    if (dir == 'up')                                /*|*/
        snakeY -= bx;                               /*|*/
    if (dir == 'down')                              /*|*/
        snakeY += bx;                               /*|*/
    
    let newHead = {                         /*создается новый массив из одного элемента c координатами*/
        x: snakeX,                          /*этот массив добавляется к массиву змейки snake*/
        y: snakeY                           /*при каждом обновлении кадра к змейке добавляется newHead в начало массива*/
    };                                      /*и удаляется последний элемент массива, таким образом змейка двигается*/

    eatSelf(newHead, snake);            /*функция прекращения игры если голова змейки встретится с ее телом*/

    

    snake.unshift(newHead);                  /*добавление newHead в начало массива snake*/      
    
}

let game = setInterval(drawGame,100);               /*отрисовка игры каждые 100 мс*/


