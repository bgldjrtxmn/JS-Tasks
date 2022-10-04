let a = document.querySelector('.btn1');
let b = document.querySelector('.out1');
let c = [13,15,22,23,26,35,72];
let g = 23;
let j = 27;

a.onclick = () =>{
    let y = c.find(item => {
        if (item > g && item < j){
            return item
            
        }
    })
    b.innerHTML = y; 
}