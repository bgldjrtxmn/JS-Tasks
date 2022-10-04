let a = document.querySelector('.i2');
let b = document.querySelector('.btn2');
let c = [];

b.onclick = () =>{
    let l = a.value;
    let y = parseInt(l)
    let d = y * y * y;
    let f = c.push(y, d)
    console.log(c)
}