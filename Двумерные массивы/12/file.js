let a = document.querySelector('.btn12');
let b = document.querySelector('.out12');
let c = [
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0],
];
let d = [];

a.onclick = () => {
    for (i = 0; i < c.length; i++) {
        for (k = 0; k < c[i].length; k++) {
            if (c[i][k] == 1) {
                d.push(1)
            }
        }
    }
    b.innerHTML = d.join(' ');
};