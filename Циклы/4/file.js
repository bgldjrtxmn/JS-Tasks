let a = document.querySelector('.b-4');
let b = document.querySelector('.out-4');


a.onclick = function fc4() {
    for (i = 77; i >= 35; i = i - 3) {
        b.innerHTML += i + "_"
    }
}