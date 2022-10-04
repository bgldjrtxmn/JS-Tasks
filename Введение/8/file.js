let a = document.querySelector('.btn8');
let b = document.querySelector('.out8');

a.onclick = showNumber;

let d = 0;

function showNumber() {
    d += 1;
    if (d < 10) {
        b.innerHTML = d;
    } else {
        d = 0;
        b.innerHTML = d;
    }
}