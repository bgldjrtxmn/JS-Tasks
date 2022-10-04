let a = document.querySelector('.btn5');
let b = document.querySelector('.out5');

let arr2 = [];

a.onclick = () => {
    let arr = [3, 4, 5, 2, 1, 7, 8, 2, 4, 6, 8, 11, 23, 17];
    for (let i of arr) {
        if (i > 7) {
            arr2.push(i)
        }
    }
    b.innerHTML = arr2.join(' ')
}