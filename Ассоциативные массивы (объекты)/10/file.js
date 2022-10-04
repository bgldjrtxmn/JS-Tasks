let a = document.querySelector('.btn10');
let b = document.querySelector('.out10');
let c = {
    "b": 17,
    "e": 22,
    "j": 17,
    "k": 22,
    "d": 54
};

function fn10(arr, out) {
    let i = document.querySelector('.i10').value;

    for (key in arr) {
        if (arr[key] == i) {
            out.innerHTML = 'true';
            break;
        } else {
            out.innerHTML = 'false'
        }
    }
}

a.onclick = function() {
    fn10(c, b)
}