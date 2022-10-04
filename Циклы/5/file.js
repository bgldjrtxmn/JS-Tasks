let a = document.querySelector('.b-5');
let b = document.querySelector('.out-5');

a.onclick = function fc5() {
    for (i = 1; i <= 17; i++) {
        if (i % 2 == 0) {
            b.innerHTML += i + '_**'
        } else {
            b.innerHTML += i + '_*'
        }
    }
}