let a = document.querySelector('.out19');

let b = [1, 424, 313, 2, 241, 323, 45, 67];

let c = 0;

for (i = 0; i < b.length; i++) {
    if (b[i] < b[c]) {
        c = i;
    }
}

a.innerHTML = c;