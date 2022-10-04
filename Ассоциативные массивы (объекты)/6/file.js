let a = document.querySelector('.btn6');
let a2 = document.querySelector('.btn66');
let b = document.querySelector('.out6');
let c = {
    "b": 17,
    "e": 22
};

let d = ''

function fn5(arr, output) {
    for (let key in arr) {
        d += key + ' --- ' + arr[key] + '</br>';
    };
    output.innerHTML = d;
}

a.onclick = function() {
    fn5(c, b)
}

function f6() {
    let i = document.querySelector('.inp6').value;
    let i2 = document.querySelector('.inp66').value;
    c[i] = i2;
    console.log(c);
}

a2.onclick = f6;