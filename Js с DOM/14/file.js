let a = document.querySelector('.btn14');
let b = document.querySelector('.out14');

a.onclick = function fn14() {
    let c = document.createElement('div');
    let d = document.createTextNode('14');
    c.append(d);
    c.classList.add('out144');
    b.prepend(c)
}