let a = document.querySelector('.out12');

let b = ['test', 'west', 'list', 'class', 'best'];

let c = b[0];
b[0] = b[b.length - 1];
b[b.length - 1] = c;

a.innerHTML = b