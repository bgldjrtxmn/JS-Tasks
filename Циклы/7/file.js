let a = document.querySelector('.in-7');
let b = document.querySelector('.b-7');
let c = document.querySelector('.out-7');

b.onclick = function fn7() {
    for (i = a.value; i >= 0; i--) {
        c.innerHTML += i + ' ';
    }
}