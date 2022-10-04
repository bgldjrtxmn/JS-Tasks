let a = document.querySelector('.out5');
let b = document.querySelector('.inp5');
let c = document.querySelector('.btn5');

function t5() {
    let num = b.value
    if (num % 2 == 0) {
        even();
    } else {
        odd()
    }
}

function even() {
    a.innerHTML = 'Четное'
}

function odd() {
    a.innerHTML = 'Не четное'
}