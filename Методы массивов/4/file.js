let a = document.querySelector('.i4');
let b = document.querySelector('.btn4');
let c = document.querySelector('.out4');
let d = [];

b.onclick = function fn4() {
    let f = [];
    f = a.value
    d.push(f)
    c.innerHTML = d;
}