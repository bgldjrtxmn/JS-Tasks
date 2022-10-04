let a = document.querySelector('.btn9');
let b = document.querySelector('.out9');
let s = new Set([9, 8, 7, 6, 5]);
let arr = [];

a.onclick = () => {
    for (let i of s) {
        arr.push(i);
    }
    console.log(arr)
    b.innerHTML = arr.join(' ')
}