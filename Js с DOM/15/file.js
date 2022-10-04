let a = document.querySelector('.btn15');
let b = document.querySelector('.out15');

a.onclick = function fn15() {
    let c = document.createElement('div');
    let d = document.createTextNode('Himan');

    c.append(d);
    c.classList.add('bg155');
    b.before(c)
}