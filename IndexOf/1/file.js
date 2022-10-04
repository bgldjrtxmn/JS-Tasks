let a = document.querySelector('.i1');
let b = document.querySelector('.btn1');
let c = document.querySelector('.out1');
let d = [1,2,3,4,5,6,7,8,9,10]

b.onclick = () =>{
    let v = a.value;
    let g = parseInt(v)
    let n = d.indexOf(g)
    c.innerHTML = n;
}