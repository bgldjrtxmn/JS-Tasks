let a = document.querySelector('.inp14');
let b = document.querySelector('.btn14');
let c = document.querySelector('.out14');
let d = [];

b.onclick = () => {
    let f = a.value;
    let g = Number.parseInt(f);
    for (i = 0; i <= g - 1; i++) {
        d.push('1');
    }
    c.innerHTML = d;
}