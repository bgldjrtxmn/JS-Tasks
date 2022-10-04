let a = document.querySelector('.btn6');
let b = document.querySelector('.out6');
let arr = [
    [1, 2],
    [3, 4],
    [5, 6]
];
let arr2 = [].concat(...arr);

a.onclick = () => {
    b.innerHTML = arr2.join(' ')
}