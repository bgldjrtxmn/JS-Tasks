let a = document.querySelector('.btn1');
let b = [1,2,3,4,5,6,7];
let c = ['a','b','c','d'];

a.onclick = () =>{
    let g = b.concat(c);
    console.log(g)
    }