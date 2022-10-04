let a = document.querySelector('.btn2');
let b = document.querySelector('.out2');

let c = ['i', 12, true]

a.onclick = function fn2() {
    b.innerHTML = c;
}