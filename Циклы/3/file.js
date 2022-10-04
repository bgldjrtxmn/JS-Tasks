let a = document.querySelector('.b-3');
let b = document.querySelector('.out-3');

a.onclick = function fn3() {
    for (i = 25; i >= 7; i = i - 1) {
        b.innerHTML += i + ' ';
    }
}