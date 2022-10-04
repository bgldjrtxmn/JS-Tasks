let a = document.querySelector('.btn1');
let b = document.querySelector('.out1');

let c = [1, 'Hi', 222, true];

a.onclick = function fn1() {
    b.innerHTML = c;
}