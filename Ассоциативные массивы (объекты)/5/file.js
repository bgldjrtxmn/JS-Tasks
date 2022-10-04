let a = document.querySelector('.btn5');
let b = document.querySelector('.out5');
let c = {
    "one": "hello",
    "two": "mahai",
    "five": "hi",
    "test": 21,
    "odd": "hi",
    "mix": "mix"
};

let d = '';


function fn5(arr, output) {
    for (let key in arr) {
        d += key + ' --- ' + arr[key] + '</br>';
    };
    output.innerHTML = d;
}

a.onclick = function() {
    fn5(c, b)
}