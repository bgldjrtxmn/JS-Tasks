let a = document.querySelector('.btn7');
let b = document.querySelector('.out7');
let c = [1,2,3,4,5,6,7,8,9,0];

a.onclick = () =>{
    c.splice(2);
    b.innerHTML = c.join(' ');
}