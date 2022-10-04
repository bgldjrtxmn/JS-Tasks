let a = document.querySelector('.btn11');
let d = document.querySelector('.out11')
let b = document.createElement('div');
a.onclick = function fn11() {

    let c = document.createTextNode('Hello')
    b.appendChild(c)
    document.body.appendChild(b);
}