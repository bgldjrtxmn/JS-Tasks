let a = document.querySelector('.btn5');
let v = document.querySelector('.out5');

a.onclick = () =>{
    fn5(100, 0);
}

function fn5 (a, b, c = 20){
    if (b > 0){
        v.innerHTML = a / b;
    }

    else {
        v.innerHTML = a / c;
    }
}