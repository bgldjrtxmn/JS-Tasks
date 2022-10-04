let a = document.querySelector('.btn3');
let b = document.querySelector('.out3');
let c = [13,15,22,23,26,35,72];


a.onclick = () =>{
    let y = c.filter(item => {
        if (item > 11 && item < 16){
            return item           
        }
    })
    console.log(y[0])
}