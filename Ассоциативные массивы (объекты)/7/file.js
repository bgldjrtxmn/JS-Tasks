let a = document.querySelector('.btn7');
let b = document.querySelector('.out7');
let c = {
    "b": 17,
    "e": 22
};

let d = '';

a.onclick = function fn7() {
    let i = document.querySelector('.i7').value;
    for (let key in c) {
        if (key == i) {
            b.innerHTML = '1';
            break
        } else {
            b.innerHTML = '0';
        }
    }
}