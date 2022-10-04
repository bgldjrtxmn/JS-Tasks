let a = document.querySelector('.btn11');
let b = document.querySelector('.out11');
let c = {
    "b": 17,
    "e": 22,
    "j": 17,
    "k": 22,
    "d": 54
};

let d = '';

a.onclick = function fn11() {
    let i = document.querySelector('.i11').value;

    for (let key in c) {
        if (key == i) {
            delete key;
        } else {
            d += key + ' --- ' + c[key] + '</br>';
        }
    }


    b.innerHTML = d;
}