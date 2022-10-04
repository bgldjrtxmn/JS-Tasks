let a = document.querySelector('.inp1');
let b = document.querySelector('.btn1');
let c = document.querySelector('.out1');

let d = [33, 'best', 66, 'best'];

b.onclick = function fn1() {
    d.push(a.value);
    c.innerHTML = d.join(' ');
}