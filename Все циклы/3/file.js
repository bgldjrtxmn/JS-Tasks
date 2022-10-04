let a = document.querySelector('.btn3');
let b = document.getElementsByClassName('out3');

a.onclick = () => {
    for (i = 0; i < b.length; i++) {
        b[i].innerHTML = 'Tom'
    }
}