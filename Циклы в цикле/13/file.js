let a = document.querySelector('.out13');

for (i = 0; i < 5; i++) {
    for (k = 5; k > i; k--) {
        a.innerHTML += '*';
    }

    a.innerHTML += '<br/>'
}