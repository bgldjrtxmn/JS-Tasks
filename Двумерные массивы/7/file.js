let a = document.querySelector('.btn7');
let b = document.querySelector('.out7');
let c = [
    [1, 2, 3],
    [34, 45, 55, 104, 2323, 444, 5],
    [7, 8, 9]
];
let d = [];

for (i = 0; i < c.length; i++) {
    for (k = 0; k < c[i].length; k++) {
        if (c[i][k] % 2 === 0) {
            d.push(c[i][k])
        }
    }
}

a.onclick = () => {
    b.innerHTML = d.join(' ')
}