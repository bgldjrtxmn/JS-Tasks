let a = document.querySelector('.btn4');
let s = new Set();
s.add('hi');
s.add('i');
s.add('am');
s.add('Tom');

a.onclick = () => {
    let i = document.querySelector('.i4').value;
    let r = s.has(i);
    console.log(r)
}