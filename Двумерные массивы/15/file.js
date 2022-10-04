let a = document.querySelector('.btn15');
let b = document.querySelector('.out15');
let c = [
    [34, 45, 55, 'i'],
    [1, 2, 3, 3, 3, 3, 'Hi'],
    [8, 9, 'Tom'],
];
let d = 0;

for (i = 0; i < c.length; i++) {
    g = c[i].length;
    if (d < g) {
        d = g
    }
}

a.onclick = () => {
    b.innerHTML = d;
}