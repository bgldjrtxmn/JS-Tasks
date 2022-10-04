let a = document.querySelector('.btn5');
let b = document.querySelector('.out5');

a.onclick = function fn5() {
    if (b.classList.contains('out5')) {
        b.innerHTML = true
    } else {
        b.innerHTML = false
    }
}