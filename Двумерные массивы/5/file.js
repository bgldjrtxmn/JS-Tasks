let a = document.querySelector('.btn5');
let b = document.querySelector('.out5');
let c = [
    [1, 2, 3],
    [34, 45, 55],
    [7, 8, 9]
];

let d = []

for (i = 0; i < c.length; i++) {
    let g = c[i];
    for (k = 0; k < c[i].length; k++) {
        if (c[i][k] % 2 == 0) {
            d.push(c[i][k])
        }
    }
}

a.onclick = () => {
    b.innerHTML = d;
}