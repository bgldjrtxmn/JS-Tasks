let a = document.querySelector('.i51');
let b = document.querySelector('.i52');
let c = document.querySelector('.btn5');
let d = document.querySelector('.out5');
let g = [1,2,3,4,5,6,7,8,9,10];

c.onclick = () =>{
    let aa = a.value;
    let bb = b.value;
    let h = parseInt(aa);
    let j = parseInt(bb);
    let l = g.indexOf(h,j);
    d.innerHTML = l;
}