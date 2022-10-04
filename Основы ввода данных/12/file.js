let a = document.querySelector('.one');
let b = document.querySelector('.two');
let c = document.querySelector('.btn');
let d = document.querySelector('.display');

c.onclick = function() {

    d.innerHTML = (a.value * 1 + b.value * 1);

}