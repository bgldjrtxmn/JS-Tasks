let a = document.querySelector('#ch1');
let b = document.querySelector('.btn1');
let c = document.querySelector('.dv1')

b.onclick = function() {
    console.log(a.checked);
    if (a.checked) {
        c.innerHTML = true
    } else {
        c.innerHTML = false
    }
}