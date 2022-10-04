let a = document.querySelector('.out18');

let b = [15, 24, 13, 78, 21, 4, 45, 67];
let c = 0;

for (i = 0; i < b.length; i++) {
    if (b[i] > c) {
        c = b[i]
    }
}

a.innerHTML = c;