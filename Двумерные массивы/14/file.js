let a = document.querySelector('.btn14');
let b = document.querySelector('.out14');
let c = [
    [1, 2, 3, 3, 3, 3, 'Hi'],
    [34, 45, 55, 'i'],
    [8, 9, 'Tom']
];

let d = [];

for (i = 0; i < c.length; i++) {
    g = c[i].length;
    d.push(g);
}

a.onclick = () => {
    b.innerHTML = d.join(' ');
}