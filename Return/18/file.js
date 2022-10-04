let a = document.querySelector('.i-18');
let b = document.querySelector('.out-18');

a.addEventListener('change', function (){
    b.innerHTML = a.value;
})