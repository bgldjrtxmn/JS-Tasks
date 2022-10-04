let a = document.querySelector('#hi1');
let b = document.querySelector('.btn1');
let c = document.querySelector('.dv2');

b.onclick = function() {
    c.innerHTML = (a.value)
}