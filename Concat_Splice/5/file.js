let a = document.querySelector('.btn5');
let d = document.querySelector('.out5')
let b = 'Hi ';
let c = ['Men '];
let f = ['I am Tom'];

a.onclick = () =>{
    let g = b.concat(c,f);
    d.innerHTML = g;
    }