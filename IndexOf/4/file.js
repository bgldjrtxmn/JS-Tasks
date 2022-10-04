let a = document.querySelector('.btn4');
let b = document.querySelector('.out4');
let c = [1,2,3,4,5,6,7,8,9,10];

 function fn4 (array, elem){
    let g = array.indexOf(elem);
    b.innerHTML = g;
}

a.onclick = () => fn4(c,0)