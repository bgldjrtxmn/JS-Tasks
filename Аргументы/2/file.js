let a = document.querySelector('.btn2');

a.onclick = () =>{
    fn2(1, 10, '.out2');
}

function fn2(min, max, elem){
    let res = Math.floor(Math.random() * (max - min)) + min;
    let b =document.querySelector(elem);
    b.innerHTML = res;
}