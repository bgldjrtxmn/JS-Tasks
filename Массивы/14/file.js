let a = document.querySelector('.out14');

let b = [1, 2, 3, 'hello', 66];
let c = [];
for (i = b.length - 1; i >= 0; i--) {
    c.push(b[i])
}
a.innerHTML = c.join(' ');