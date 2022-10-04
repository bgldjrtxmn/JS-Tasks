let a = document.querySelector('.btn3');
let b = document.querySelector('.out3');
let c = [
    [1,2,3,4,5],
    [6,7,8,9],
    [10,11],
]

a.onclick = () =>{
    let n = c.find(item => item.includes(3));
    let m = n.includes(3)
    console.log(n)
    b.innerHTML = m;
}
