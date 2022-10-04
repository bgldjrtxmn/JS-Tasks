let a = document.querySelector('.btn4');
let b = document.querySelectorAll('.out4');

a.onclick = () => {
    for (i = 0; i < b.length; i++) {
        b[i].innerHTML = 'Tom'
    }
}