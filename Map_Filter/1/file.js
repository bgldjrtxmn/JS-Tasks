let a = document.querySelector('.btn1');
let b = [1,2,3,4,5,6,7,8,9,0];

a.onclick = () =>{
    let c = b.map((item) => item *3);
    console.log(c)
}