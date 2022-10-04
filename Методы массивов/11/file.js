let a = document.querySelector('.inp11');
let b = document.querySelector('.btn11');
let c = document.querySelector('.out11');
let d = [2, 3, 4, 5, 6, 7];

b.onclick = () => {
    let f = a.value;
    let g = Number.parseInt(f);
    c.innerHTML = d.indexOf(g)
    console.log(g)
}