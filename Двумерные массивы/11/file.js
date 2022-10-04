let a = document.querySelector('.btn11');
let b = document.querySelector('.out11');
let c = [
    [1, 2, 3, 'Hi'],
    [34, 45, 55, 'i'],
    [7, 8, 9, 'Tom']
];
let d = [];

for (i = c.length - 1; i >= 0; i--) {
    for (k = c[i].length - 1; k >= 0; k--) {
        if (typeof c[i][k] == 'string') {
            d.push(c[i][k]);
        }
    }
}

a.onclick = () => {
    b.innerHTML = d.join(' ');
}