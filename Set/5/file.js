let a = document.querySelector('.btn5');
let b = document.querySelector('.out5');
let s = new Set();
s.add('hi');
s.add('i');
s.add('am');
s.add('Tom');

a.onclick = () => {
    b.innerHTML = s.size;
}