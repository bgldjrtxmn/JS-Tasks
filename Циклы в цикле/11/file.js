let a = document.querySelector('.out10');

for (i = 1; i < 11; i++) {
    for (k = 1; k < 11; k++) {
        a.innerHTML += `${i}*${k}=${k*i} <br/>`
    }
    a.innerHTML += '<hr/>'
}