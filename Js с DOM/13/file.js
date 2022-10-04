let a = document.querySelector('.btn13');
let b = document.querySelector('.out13');

a.onclick = function fn13() {
    let c = document.createElement('div');
    let d = document.createTextNode('pushMe');
    c.append(d);
    c.classList.add('out133')
    b.appendChild(c)
    c.onclick = function fn133() {
        c.classList.toggle('out1333')
    }
}