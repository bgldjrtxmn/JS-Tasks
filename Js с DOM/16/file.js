let a = document.querySelector('.btn16');
let b = document.querySelector('.out16');

a.onclick = function fn16() {
    let c = document.createElement('div');
    let d = document.createTextNode('Himan');
    c.append(d);
    c.classList.add('bg166');
    b.after(c)
}