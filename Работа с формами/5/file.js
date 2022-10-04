let a = document.querySelector('#ch2');
let b = document.querySelector('.btn2');
let c = document.querySelector('.dv2');

b.onclick = function() {
    if (a.checked) {
        c.innerHTML = a.value;
    } else {
        c.innerHTML = false
    }
}