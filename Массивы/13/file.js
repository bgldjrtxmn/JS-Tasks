let a = document.querySelector('.out13');

let b = ['test', 'west', 'list', 'class', 'best'];
let c = []
for (i = 0; i < b.length; i++) {
    c.push(i + ' ' + b[i] + ' ')
}

a.innerHTML = c.join(' ')

console.log(b.length)