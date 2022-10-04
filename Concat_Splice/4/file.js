let a = document.querySelector('.btn4');
let d = document.querySelector('.out4')
let b = 'Hi ';
let c = ['Men'];

a.onclick = () =>{
    let g = b.concat(c);
    d.innerHTML = g;
    }