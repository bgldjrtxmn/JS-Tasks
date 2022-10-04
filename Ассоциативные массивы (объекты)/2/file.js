let a = document.querySelector('.btn2');
let b = document.querySelector('.out2');
let c = {
    "one": "hello",
    "two": "mahai",
    "five": "hi"
};

a.onclick = () => {
    b.innerHTML = c.five;
}