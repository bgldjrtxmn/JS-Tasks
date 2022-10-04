let a = document.querySelector('.out4');

for (i = 1; i < 4; i++) {
    a.innerHTML += i + '_'
    for (k = 1; k < 6; k++) {
        a.innerHTML += k + ' '
    }
}