let a = document.querySelector('.btn5');
let b = [1,'hello',3,'4',5,6,7,8,9,0];

a.onclick = () =>{
    let c = b.map((item, index) => {
        return index
    });
    console.log(c)
}