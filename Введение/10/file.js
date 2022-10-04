let a = document.querySelector('.btn10');
let b = document.querySelector('.out10');

let ar10 = [1, 2, 3, '4', '22', 8];
let ar10_res = [];

a.onclick = f10;

function f10() {
    for (i = 0; i < ar10.length; i++) {
        if (typeof ar10[i] === 'number') {
            ar10_res.push(ar10[i]);
        }
    }
    showArr();
}

function showArr() {
    b.innerHTML = ar10_res.join(' ');
}