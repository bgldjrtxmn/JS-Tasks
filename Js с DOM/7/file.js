let a = document.querySelector('.btn7');
let b = document.querySelectorAll('.out7');

a.onclick = function fn7() {
    for (i = 0; i < b.length; i++) {
        b[i].classList.toggle('out77')
    }
}