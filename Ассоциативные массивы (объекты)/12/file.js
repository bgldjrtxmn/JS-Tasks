let a = document.querySelector('.btn12');
let b = document.querySelector('.out12');
let c = {
    "b": 12,
    "e": 22,
    "j": 17,
    "k": 23,
    "d": 15,
};

let d = '';

a.onclick = () => {
    let i = document.querySelector('.i12').value;

    for (let key in c) {
        if (c[key] == i) {
            delete key;
        } else {
            d += key + ' --- ' + c[key] + '</br>';
        }
    }

    b.innerHTML = d;
}