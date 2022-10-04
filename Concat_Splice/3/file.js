let a = document.querySelector('.btn3');
let d = document.querySelector('.out3')
let b = 'Hi';
let c = ['Men'];

a.onclick = () =>{
    let g = b.concat(c);
    d.innerHTML = g;
    }