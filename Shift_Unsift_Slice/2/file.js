let a = document.querySelector('.i2');
let b = document.querySelector('.btn2');
let c = [1,2,3,4,5,6,7,8,9,0];

b.onclick = () => {
    let g = a.value;
    let h = parseInt(g)
    let f = c.unshift(h);
    console.log(c)
}