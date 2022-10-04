let a = document.querySelector('.btn8');
let b = [1,2,3,4,5,6,7,8,9,0];

a.onclick = () => {
    let c = b.pop();
    console.log(c) 
}