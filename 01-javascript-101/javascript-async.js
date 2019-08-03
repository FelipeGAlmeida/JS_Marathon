const timer = 1000;

console.log('Is it ended?');

function operation1() {
    console.log('Operation 1');
}

function operation2() {
    setTimeout(() => console.log('Operation 2'), timer);
}

function operation3() {
    console.log('Operation 3');
}

operation1();
operation2();
operation3();
   