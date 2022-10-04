let a = document.querySelector('.b-10');
let b = document.querySelector('.out-10');

a.onclick = function fn10() {
    for (i = 1950; i <= 2000; i = i + 2) {
        b.innerHTML += i + ' '
    }
}