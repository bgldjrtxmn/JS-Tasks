let a = document.querySelector('.i2');
let b = document.querySelector('.btn2');
let c = document.querySelector('.out2');
let d = [1,2,3,4,5,6,7,8,9,10];

b.onclick = () => {
    let g = a.value;
    let h = parseInt(g);
    let j = d.includes(h)
    let k = d.indexOf(h);
    if (j){
    c.innerHTML = 'true' +  ' ' + k;
    }
    else{
        c.innerHTML = 'false' + ' '+ k;
    }
}