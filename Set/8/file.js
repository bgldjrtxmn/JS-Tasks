let a = document.querySelector('.btn8');
let s = new Set([1, 2, 3, 4, 5, 3, 4, 7, 9, 5, 7, 8, 9, 23, 45, 5, 2, 4, 5, 3, 24, 5, 2, 4, 56, 4, 3, 2, 335, 2, 23, 41, 3, 4, 1, 1, 4, 2, 2, 4, 5, 24, 5, 3, 22, 56]);
let arr = [];

a.onclick = () => {
    for (let i of s) {
        if (i > 5) {
            arr.push(s);
        }
    }
    console.log(arr)
}