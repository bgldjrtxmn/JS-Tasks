let a = document.querySelector('.btn15');
let b = document.querySelectorAll('.out15');

a.onclick = () => {
    for (i = 0; i < b.length; i++) {
        b[i].innerHTML = 'Tom';
    }
}