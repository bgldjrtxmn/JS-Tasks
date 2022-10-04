let a = document.querySelector('.inp15');
let b = document.querySelector('.btn15');
let c = document.querySelector('.out15');
let d = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];

b.onclick = () => {
    let f = a.value;
    let g = Number.parseInt(f);
    let h = d.indexOf(g);
    if (h < 0) {
        d.push(g)
    }
    c.innerHTML = d;
}