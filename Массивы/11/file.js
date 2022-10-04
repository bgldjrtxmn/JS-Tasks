let a = document.querySelector('.out11');

let b = [2, 3, 4, 5, 6, 7];

let t = b[2];
b[2] = b[4];
b[4] = t

a.innerHTML = b.join(' ')