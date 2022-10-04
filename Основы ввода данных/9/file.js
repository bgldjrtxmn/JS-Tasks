let a = document.querySelector('input');
let b = document.querySelector('button');

b.onclick = function() {
    console.log(a.value * 10);
    a.value = '';
}