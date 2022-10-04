let a = document.querySelector('.btn3');

a.onclick = () =>{
    fn3(1, 10, '.out3');
}

function fn3 ( min = 0, max = 100, elem,){
    let b = document.querySelector(elem);
    let res = Math.floor(Math.random() * (max - min)) + min;
    b.innerHTML = res;
}