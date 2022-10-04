let a = document.querySelector('.btn11');
let b = document.querySelector('.out11');
let am = {
    one: 11,
    two: 7,
    three: 13,
    four: 0
}

a.onclick = () => {
    let str = '';
    for (let key in am) {
        if (am[key] > 10) {
            str += am[key] + ' ';
        }
    }
    b.innerHTML = str;
}