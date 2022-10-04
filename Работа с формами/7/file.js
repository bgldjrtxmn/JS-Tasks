let a = document.querySelector('#pas1');
let b = document.querySelector('.btn1');
let c = document.querySelector('.dv1');

b.onclick = function() {
    if (a.value.length >= 6) {
        c.innerHTML = ('1')
    } else {
        c.innerHTML = ('0')
    }
}