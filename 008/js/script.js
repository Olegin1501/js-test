'use strick';
// цыклы


// цыкл while
let num=50
while (num<55) {
    console.log(num);
    num++;
}

// цыкл do
let num1=50;
do {
    console.log(num1);
    num1++;
}
while (num1<55);

// цикл for
for (let i=1; i<10; i++) {
    if (i==7){
        break;
    }
    console.log(i)
}
// то же но пропустить 7
// цикл for
for (let i=1; i<10; i++) {
    if (i==7){
        continue;
    }
    console.log(i)
}