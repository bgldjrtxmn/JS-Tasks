let a = document.querySelector('.btn10');
let b = document.querySelector('.out10');
let c = [
    [1, 2, 3, 'Hi'],
    [34, 45, 55, 'i'],
    [7, 8, 9, 'Tom']
];
let d = [];

for (i = 0; i < c.length; i++) {
    for (k = 0; k < c[i].length; k++) {
        if (typeof c[i][k] == 'string') {
            d.push(c[i][k]);
        }
    }
}

a.onclick = () => {
    b.innerHTML = d.join(' ');
}