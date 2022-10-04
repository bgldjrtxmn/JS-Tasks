let a = document.querySelector('.btn2');
let b = document.querySelector('.out2');
let c = [13,15,22,23,26,35,72];


a.onclick = () =>{
    let y = c.find(item => {
        if (item > 11 && item < 16){
            return item
            
        }
    })
    b.innerHTML = y; 
}