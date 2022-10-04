let a = document.querySelector('.btn3');
let b = document.querySelector('.out3');
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
    if (c[key] == 'hi') {
        d += c[key] + ' ';
    }
}
a.onclick = () => {
    b.innerHTML = d;
}