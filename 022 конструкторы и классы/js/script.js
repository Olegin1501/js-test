'use strick';
function User (name, id){                     /*функция - конструктор*/
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function(){
        console.log('hello '+this.name);
    }
};

User.prototype.exit = function(name){
    console.log('Рользователь '+this.name+' ушел')
}

let Oleg = new User ('Oleg', 25);
    Ivan = new User ('Ivan', 20);

console.log(Oleg);
console.log(Ivan);

Oleg.exit();
Ivan.hello();

// Так писать правильнее
class User{
    constructor(name,id){                                   /*задание конструктора*/
        this.name = name;
        this.id = id;
        this.human = true;
    }
    hello(){                                                /*метод класса, то есть то что он должен делать*/
        console.log(`hello ${this.name}`);
    }
    exit(){
        console.log(`пользователь ${this.name} вышел`);     /*метод класса, то есть то что он должен делать*/
    }
}
let Oleg = new User('Oleg', 23),                            /*задание параметров для конструктора/функции*/
    Ivan = new User('Ivan', 20);

console.log(Oleg);
console.log(Ivan);
Oleg.hello();                                               /*выполняется функция/метод hello для Oleg*/
Ivan.exit();                                                /*выполняется функция/метод exit для Ivan*/

