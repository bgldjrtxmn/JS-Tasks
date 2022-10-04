let a = document.querySelector('.out9');

for (i = 2; i < 7; i++) {
    for (k = 1; k < i; k++) {
        a.innerHTML += k + ' '
    }
    a.innerHTML += '<br/>'
}