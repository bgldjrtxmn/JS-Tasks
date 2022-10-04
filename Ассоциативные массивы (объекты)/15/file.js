let a = document.querySelector('.btn15');
let b = document.querySelector('.out15');
let c = {
    'prim': [1, 2, 23],
    'one': [3, 4, 5],
    'testt': [6, 7, 8],
    'ivan': [9, 10]
};

let d = [];

a.onclick = () => {
    for (let key in c) {
        d.push(c[key])
    }

    b.innerHTML = d.join(' ');
}