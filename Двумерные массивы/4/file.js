let a = document.querySelector('.btn4');
let b = document.querySelector('.out4');
let c = [
    ['hi', 'my', 'name'],
    ['is', 'Tom', 'and'],
    ['you', '?', 'Go']
];

a.onclick = () => {
    b.innerHTML = c[2][2];
}