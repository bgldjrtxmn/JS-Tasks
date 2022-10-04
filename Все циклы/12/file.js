let a = document.querySelector('.btn12');
let b = document.querySelector('.out12');
let arr = [4, 5, 6, 7];

a.onclick = () => {
    let str = '';
    for (let i of arr) {
        str += i + ' ';
    }
    b.innerHTML = str;
}