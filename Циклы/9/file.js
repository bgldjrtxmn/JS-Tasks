let a = document.querySelector('.i-91');
let b = document.querySelector('.i-92');
let c = document.querySelector('.b-9');
let d = document.querySelector('.out-9');

c.onclick = function fc9() {
    if (a.value > b.value) {
        for (i = b.value; i <= a.value; i++) {
            d.innerHTML += i + ' '
        }
    } else {
        for (i = a.value; i <= b.value; i++) {
            d.innerHTML += i + " "
        }
    }
}