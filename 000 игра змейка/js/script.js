const cnv = document.querySelector('#game'),
    ctx = cnv.getContext('2d'),
    groundImg = new Image(),
    foodImg = new Image(),
    bx = 32;
groundImg.src = '../img/1.png';
foodImg.src = '../img/2.png';
let score = 0,
    food = {
        x: Math.floor(Math.random()*17+1)*bx,
        y: Math.floor(Math.random()*15+3)*bx
    },
    snake = [],
    dir;

snake[0]={
    x:9*bx,
    y:10*bx
}; 

document.addEventListener('keydown', function(event){
    if (event.keyCode == 37 && dir!='right') 
        dir = 'left';
    else if (event.keyCode == 38  && dir!='down')  
        dir = 'up';
    else if (event.keyCode == 39  && dir!='left') 
        dir = 'right';
    else if (event.keyCode == 40  && dir!='up') 
        dir = 'down';
});

function eatSelf(head, snk){
    for (let i=0; i<snk.length; i++){
        if (head.x==snk[i].x && head.y==snk[i].y){
            clearInterval(game);
        }
    }
}

function drawGame(){
    ctx.drawImage(groundImg, 0, 0);
    ctx.drawImage(foodImg, food.x, food.y);
    
    for (let i=0; i<snake.length;i++){
        ctx.fillStyle = i==0 ? 'green' : 'gray';
        ctx.fillRect(snake[i].x, snake[i].y, bx, bx);
    }

    ctx.fillStyle = 'white';
    ctx.font = '32px arial';
    ctx.fillText(score, 2*bx, 1.6*bx);

    let snakeX = snake[0].x,
        snakeY = snake[0].y;    
    
    if (snakeX==food.x && snakeY==food.y) {
        score++;
        food = {
            x: Math.floor(Math.random()*17+1)*bx,
            y: Math.floor(Math.random()*15+3)*bx
        }
    }
    else {snake.pop()};
    
    if (snakeX<bx || snakeX>17*bx || snakeY<3*bx || snakeY>17*bx){
        clearInterval(game);
    }

    if (dir == 'left')
        snakeX -= bx;
    if (dir == 'right')
        snakeX += bx;
    if (dir == 'up')
        snakeY -= bx;
    if (dir == 'down')
        snakeY += bx;
    
    let newHead = {
        x: snakeX,
        y: snakeY
    };
    
    eatSelf(newHead, snake);

    snake.unshift(newHead);
    
    
    
}

let game = setInterval(drawGame,100);


