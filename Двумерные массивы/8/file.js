let a = document.querySelector('.btn8');
let b = document.querySelector('.out8');
let c = [
    [1, 2, 3],
    [34, 45, 55],
    [7, 8, 9, 2, 4, 6, 7, 5, 8, 9, 34],
];
let d = [];

for (i = 0; i < c.length; i++) {
    for (k = 0; k < c[i].length; k++) {
        if (c[i][k] % 2 !== 0) {
            d.push(c[i][k]);
        }
    }
}

a.onclick = () => {
    b.innerHTML = d.join(' ');
}