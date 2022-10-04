let a = document.querySelector('.btn17');
let b = document.querySelector('.out17');

a.onclick = function fn17() {
    let c = document.createElement('div');
    let d = document.createTextNode('Himan');
    c.append(d);
    c.classList.add('bg177');

    b.replaceWith(c);
}