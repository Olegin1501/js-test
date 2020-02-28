'use strick';
let name = 'Oleg',
    age = 32,
    email ='ex@mail.ru';

document.write('пользователю '+name+'  '+age+' года, его почта: '+email);
console.log(`пользователю ${name}  ${age} года, его почта: ${email}`);

function makeArray(){
    var items = [];

    for (let i=0; i<10; i++){
        var item = function(){
            console.log(i);
        };
        items.push(item);
    };
    return items;
}

var arr = makeArray();

arr[1]();
arr[3]();
arr[7]();

let fun = () => {
    console.log(this);
}
fun();

let obj = {
    number:5,
    sayNumber: function(){
        let say = () => {
            console.log(this);
        };
        say();
    }
    
}
obj.sayNumber();

let btn = document.querySelector('button');

btn.addEventListener('click', function(){
    let show = ()=>{
        console.log(this);
    };
    show();
});

function calcOrDouble(number,basis = 3){
    // basis = basis || 2;
    console.log(number*basis);
}

calcOrDouble(3,4);
calcOrDouble(3);

class Rectangle {
    constructor(width,height = 10){
        this.width = width;
        this.height = height;
    }
    calcArea(){
        return this.height*this.width;
    }
}
const square = new Rectangle(4);

console.log(square.calcArea());


let video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress','livejournal','tweeter'],
    internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);


function log(a,b,c){
    console.log(a);
    console.log(b);
    console.log(c);
}
let numbers = [2,5,7];

log(...numbers);