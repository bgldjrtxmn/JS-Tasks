let a = document.querySelector('.i3');
let b = document.querySelector('.btn3');
let c = document.querySelector('.out3');
let d = [1,2,3,4,5,6,7,8,9,10];

b.onclick = () => {
    let v = a.value;
    let g = parseInt(v);
    let h = d.indexOf(g);

    if (h !== -1){
        c.innerHTML = 'true';
    }
    else {
        c.innerHTML = 'false';
    }
}
