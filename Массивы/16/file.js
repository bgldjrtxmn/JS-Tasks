let a = document.querySelector('.out16even');
let b = document.querySelector('.out16odd');

let c = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];

let d = [];
let v = [];
for (i = 0; i < c.length; i++) {
    if (c[i] % 2 == 0) {
        d.push(c[i]);
    } else {
        v.push(c[i]);
    }
}

a.innerHTML = d.join(' ');
b.innerHTML = v.join(' ')