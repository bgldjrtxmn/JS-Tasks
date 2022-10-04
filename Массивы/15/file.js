let a = document.querySelector('.out15');

let b = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];

let c = [];

for (i = 0; i < b.length; i++) {
    if (b[i] > 0) {
        c.push(b[i]);
    } else {
        console.log(b[i])
    }
}

a.innerHTML = c.join(' ')