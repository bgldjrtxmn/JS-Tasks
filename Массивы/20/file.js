let a = document.querySelector('.out20');

let b = [4, 5, 6, 7, 8, 9, 10];

let c = 0;

for (i = 0; i < b.length; i++) {
    c += b[i];
}

a.innerHTML = c