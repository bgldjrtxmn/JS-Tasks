let a = document.querySelector('.btn13');
let b = document.querySelector('.out13');
let str = 'testone';


a.onclick = () => {
    let str2 = '';
    for (let i of str) {
        str2 += i + ' ';
    }
    b.innerHTML = str2;
}