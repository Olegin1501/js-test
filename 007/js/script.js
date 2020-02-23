// условия
'use strick';


if (2*4 ==7) {
    console.log('true!');
}
else {
    console.log('false!');
}

let num=101;
if (num<49) {
    console.log('false!')
}
else if (num>100) {
    console.log('too much!')
}
else {
    console.log('true!')
}

// то же самое только в тернарном коде
let num=50;
(num==50) ? console.log('true!') : console.log('false!');

// то же самое только в другом написании
let num=50;
switch (num) {
    case num<49:
        console.log('false');
        break;
    case num>100:
        console.log('too much!');
        break;
    case 50:
        console.log('true!');
        break;
    default:
        console.log('something was wrong!');
        break;
    };