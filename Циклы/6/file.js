let a = document.querySelector('.in-6');
let b = document.querySelector('.b-6');
let c = document.querySelector('.out-6');


b.onclick = function fc6() {
    for (i = 0; i < a.value; i++) {
        c.innerHTML += '******' + '<br/>'
    }

}