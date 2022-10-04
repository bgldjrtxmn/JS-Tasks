let a = document.querySelector('.btn3');
let b = document.querySelector('.out3');
let c = [
    ['hi', 'my', 'name'],
    ['is', 'Tom', 'and'],
    ['you', '?']
];

a.onclick = () => {
    b.innerHTML = c[0][1]
}