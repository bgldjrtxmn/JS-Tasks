let a = document.querySelector('.out8');
let b = document.querySelector('.out88');

let c = [1, 2, 3, 4, 5, 6];
let v = []
for (i = 0; i < c.length; i++) {
    v.push(c[i]);
    v.push('-')
}
a.innerHTML = v
b.innerHTML = c.length