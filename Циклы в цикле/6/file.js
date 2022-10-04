let a = document.querySelector('.out6');

for (i = 0; i < 3; i++) {
    a.innerHTML += '10'
    for (k = 0; k < 1; k++) {
        a.innerHTML += 'x01x'
    }
    a.innerHTML += '<br/>'
}