let a = document.querySelector('.btn1');
let b = document.querySelector('.out1');
let arr = [5, 7, 9, 11, 13, 15];

a.onclick = () => {
    let str = '';
    for (i = 0; i < arr.length; i++) {
        str += arr[i] + ' ';
    }
    b.innerHTML = str;
}