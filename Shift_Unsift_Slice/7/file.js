let a = document.querySelector('.i7');
let b = document.querySelector('.btn7');
let c = [1,2,3,4,5,6,7,8,9,0];

b.onclick = () => {
    let g = a.value;
    let f = c.shift(g);
    console.log(c)
    console.log(c.length)
}