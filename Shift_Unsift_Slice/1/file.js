let a = document.querySelector('.i1');
let b = document.querySelector('.btn1');
let c = [1,2,3,4,5,6,7,8,9,0];

b.onclick = () => {
    let g = a.value;
    let f = c.unshift(g);
    console.log(c)
}