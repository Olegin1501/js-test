'use strick';

function User(name, age){
    this.name=name;
    this.age=age;
    this.say = function(){
        console.log(`имя пользователя: ${this.name}, его возраст: ${this.age}`);
    }
}

let user = new User('Олег','32');
console.log(user.name);
console.log(user.age);
user.say();

user.age = 30;
user.name = 'Ilgiz';
user.say();

let number = 1;

(function(){
    let number = 2;

    console.log(number);

    return console.log(number+3)
}())

console.log(number);

let user1 = (function(){
    let privat = function(){
        console.log('I am a private');
    };
    return {
        sayHello: function(){
            console.log('hello!');
        }
    };
}());

console.log(user1);
console.log(user1.sayHello());