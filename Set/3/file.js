let a = document.querySelector('.btn3');
let s = new Set();
s.add('hi');
s.add('i');
s.add('am');
s.add('Tom');

a.onclick = () => {
    let i = document.querySelector('.i3').value;
    s.delete(i);
    console.log(s);
}