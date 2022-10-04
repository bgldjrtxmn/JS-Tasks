let a = document.querySelector('.one');
let b = document.querySelector('.two');
let c = document.querySelector('.sum');
let d = document.querySelector('.btn');

d.onclick = function() {
    c.innerHTML = (a.value * 1 + b.value * 1)
}