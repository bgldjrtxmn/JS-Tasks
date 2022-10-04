let a = document.querySelector('.btn8');
let b = document.querySelector('.out8');
let c = {
    "b": 17,
    "e": 22,
    'Tom': 'Riddle'
};

let d = '';

a.onclick = function fn8() {
    let i = document.querySelector('.i8').value;

    for (key in c) {
        if (key == i) {
            b.innerHTML = c[key];
            break;
        } else {
            b.innerHTML = 0;
        }
    }
}