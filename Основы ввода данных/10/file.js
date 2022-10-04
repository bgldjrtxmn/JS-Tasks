let a = document.querySelector('input');
let b = document.querySelector('button');
let c = 10;

b.onclick = function() {

    console.log(a.value * 1 + c);

    a.value = '';
}