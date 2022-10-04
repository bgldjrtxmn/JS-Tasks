let a = document.querySelector('.btn10');
let b = document.querySelector('.out10');
let s = new Set(['4', '5', '6']);
let arr = [];

function fn10(set, arr2, out) {
    for (let i of set) {
        arr2.push(i)
    };

    out.innerHTML = arr2.join(' ');
}

a.onclick = function fn101() {
    fn10(s, arr, b)
}