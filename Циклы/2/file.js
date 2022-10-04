let a = document.querySelector('.b-2');
let b = document.querySelector('.out-2');

a.onclick = function fn2() {
    for (i = 2; i < 123; i = i + 2) {
        b.innerHTML += i + ' ';
    }
}