let a = document.querySelector('.btn4');
let b = document.querySelector('.out4');
let c = {
    "one": "hello",
    "two": "mahai",
    "five": "hi",
    "test": 21,
    "odd": "hi",
    "mix": "mix"
};
let d = '';

for (let key in c) {
    d += key + ' --- ' + c[key] + '</br>';
}

a.onclick = () => {
    b.innerHTML = d;
}