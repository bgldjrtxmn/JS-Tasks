let a = document.querySelector('.btn3');
let b = [1,2,3,4,5,6,7,8,9,0];

a.onclick = () =>{
    let c = b.map((item, index) => {
        if (index < 3){
            return item *3;
        }
        else{
            return item;
        }
    });
    console.log(c)
}