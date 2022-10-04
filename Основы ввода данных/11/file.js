let a = document.querySelector('.name');
let b = document.querySelector('.surname');
let c = document.querySelector('button');

c.onclick = function() {
    console.log('Hello ' + a.value + ' ' + b.value);
    a.value = '';
}