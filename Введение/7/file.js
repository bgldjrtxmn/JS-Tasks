let a = document.querySelector('.btn7');
let c = document.querySelector('.out7');

a.onclick = t7;

let b = 77;

function t7() {
    b += 1;
    c.innerHTML = b;

    if (b > 100) {
        c.innerHTML = 100;
    }
}