let a = document.querySelector('.i5');
let b = document.querySelector('.btn5');
let c = document.querySelector('.out5');
let d = [];

b.onclick = function fn5() {
    let f = [];
    f = a.value;
    d.unshift(f);
    c.innerHTML = d;
}