let a = document.querySelector('.btn12');
let b = document.createNSResolver('div');


a.onclick = function fn12() {
    let c = document.createTextNode('Hello')
    b.appendChild(c);
    document.body.appendChild(b)
    b.classList.add('bg')
}