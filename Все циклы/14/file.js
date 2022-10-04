let a = document.querySelector('.btn14');
let b = document.querySelector('.out14');
let s = new Set([4, 5, 6]);

a.onclick = () => {
    let str = '';
    for (let i of s) {
        str += i + ' '
    }
    b.innerHTML = str;
}