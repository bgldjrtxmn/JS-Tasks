let a = document.querySelector('.b-1');
let b = document.querySelector('.out-1');

a.onclick = function fn1() {
    for (i = 1; i < 51; i++) {
        b.innerHTML += i + ' ';
    }
}