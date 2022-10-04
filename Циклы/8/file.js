let a = document.querySelector('.i-81');
let b = document.querySelector('.i-82');
let c = document.querySelector('.b-8');
let e = document.querySelector('.out-8');


c.onclick = function() {
    for (i = a.value; i <= b.value; i++) {
        e.innerHTML += i + ' ';
    }
}