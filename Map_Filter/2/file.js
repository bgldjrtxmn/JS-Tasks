let a = document.querySelector('.btn2');
let b = [1,'hello',3,'4',5,6,7,'2',9,0];

a.onclick = () =>{
    let c = b.map((item) => item *3);
    console.log(c)
}