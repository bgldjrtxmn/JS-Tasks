let a = document.querySelector('.out1');
let b = document.querySelector('.btn1');

b.onclick = function fn1() {
    a.style.width = '200px';
    a.style.height = '40px';
    a.style.background = 'red'
    a.style.border = '2px black solid'
}

console.log(a.style)