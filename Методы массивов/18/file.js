let a = document.querySelector('.inp18');
let b = document.querySelector('.btn18');
let c = document.querySelector('.out18');
let d = ['b', 'c', '45', 'e', 'z', 'y'];

b.onclick = () => {
    let f = a.value;
    let g = d.includes(f);
    c.innerHTML = g;
}