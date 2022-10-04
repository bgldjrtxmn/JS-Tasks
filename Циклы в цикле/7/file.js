let a = document.querySelector('.out7');

for (i = 1; i < 5; i++) {
    for (k = 0; k < i; k++) {
        a.innerHTML += "*"
    }
    a.innerHTML += '<br/>'
}