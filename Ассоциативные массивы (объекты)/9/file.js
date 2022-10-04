let a = document.querySelector('.btn9');
let b = document.querySelector('.out9');
let c = {
    "b": 17,
    "e": 22,
    "j": 17,
    "k": 22,
    "d": 54
};

let d = '';

a.onclick = function fn9() {
    let i = document.querySelector('.i9').value;

    for (key in c) {
        if (c[key] == i) {
            d += key + ' ';
        } else {
            b.innerHTML = '0'
        }
    }
    b.innerHTML = d;
}