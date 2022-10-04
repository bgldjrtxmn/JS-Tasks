let a = document.querySelector('.out1');

for (i = 0; i < 3; i++) {
    for (k = 0; k < 3; k++) {
        a.innerHTML += '*'
    }
    a.innerHTML += '_'
}