let a = document.querySelector('.btn4');
let b = [1,'hello',3,'4',5,6,7,8,9,0];

a.onclick = () =>{
    let c = b.map((item, index) => {
        if (typeof item == 'number'){
            return item ;
        }
    });
    console.log(c)
}