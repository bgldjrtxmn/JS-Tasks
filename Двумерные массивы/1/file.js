let a = document.querySelector('.out1');
let b = document.querySelector('.btn1');
let c = [
    [1, 2, 3],
    [34, 45, 55],
    [7, 8, 9]
];

b.onclick = function fn1() {
    a.innerHTML = c[1][2]
}