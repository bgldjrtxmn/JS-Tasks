let a = document.querySelector('.out17');

let b = [3, 0, 2, 6, 0, 1, 3, 1, 9, 0, 2, 0];

let c = 0;

for (i = 0; i < b.length; i++) {
    if (b[i] > 3) {
        c++
    }
}

a.innerHTML = c