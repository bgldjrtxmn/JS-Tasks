let a = document.querySelector('.btn2');
let b = document.querySelector('.out2');
let c = [
    ['hi', 'my', 'name'],
    ['is', 'Tom', 'and'],
    ['you', '?']
]

a.onclick = function fn2() {
    b.innerHTML = c[0][0]
}