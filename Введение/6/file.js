let a = document.querySelector('.btn6');
let b = document.querySelector('.out6');
let c = document.querySelector('.out66');

a.onclick = getRandomInt2;

function getRandomInt2() {
    let min = 100;
    let max = 200;
    let res = Math.floor(Math.random() * (max - min)) + min;
    b.innerHTML = res;
    if (res % 2 == 0) {
        even();
    } else {
        odd();
    }
}

function even() {
    c.innerHTML = 'Чётное';
}

function odd() {
    c.innerHTML = 'Не чётное';
}