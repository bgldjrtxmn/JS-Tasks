let a = document.querySelector('.btn4');
let v = document.querySelector('.out4');

a.onclick = () => {
    fn4(1, 10, 100);
}

function fn4 (a, b, c){
    if (b > 0){
        let res = Math.floor(Math.random() * (b - a)) + a;
        v.innerHTML = res;
    }

    else{
        let res = Math.floor(Math.random() * (c - a)) + a;
        v.innerHTML = res;
    }
}