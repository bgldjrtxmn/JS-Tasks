let a = document.querySelector('.btn1');
let b = document.querySelector('.out1');
let c = {
    "one": 15,
    "two": 16,
    "five": 20
};

a.onclick = () => {
    b.innerHTML = c.two;
}