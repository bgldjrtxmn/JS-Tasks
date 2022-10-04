let a = document.querySelector('.btn1');
let b = document.querySelector('.out1');

a.onclick = function fnZero ()  {
    fn1(1,10)
};

function fn1 (min, max){
    let res = Math.floor(Math.random() * (max - min)) + min;
    b.innerHTML = res;
}