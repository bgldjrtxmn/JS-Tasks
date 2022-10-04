let a = document.querySelector('.out10');

for (i = 0; i < 5; i++) {
    for (k = 1; k < 10; k++) {
        a.innerHTML += ` ${i}${k}`;
        if (k == 9) {
            a.innerHTML += ' ';
            a.innerHTML += i + 1 + '0';
        }
    }
    a.innerHTML += '<br/>';
}