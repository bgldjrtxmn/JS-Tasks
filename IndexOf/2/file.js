let a = document.querySelector('.i2');
let b = document.querySelector('.btn2');
let c = document.querySelector('.out2');
let d = [1,2,3,4,5,6,7,8,9,10]

b.onclick = () =>{
    let f = a.value;
    let g = parseInt(f);
    let h = d.indexOf(g);
    if (h !== -1){
        c.innerHTML = h;
    }
    else {
        c.innerHTML = 'false';
    }
    
}