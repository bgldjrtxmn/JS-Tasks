let a = document.querySelector('.out2');

for (i = 1; i < 4; i++) {
    a.innerHTML += i + '<br/>'
    for (k = 0; k < 3; k++) {
        a.innerHTML += '*_'
    }
    a.innerHTML += '<br/>'
}