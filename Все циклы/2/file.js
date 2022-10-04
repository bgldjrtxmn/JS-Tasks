let a = document.querySelector('.btn2');
let b = document.querySelector('.out2');
let arr = [5, 7, 9, 11, 13, 15];

a.onclick = () => {
    let str = '';
    for (i = 0; i < arr.length; i++) {
        str += i + ' ' + arr[i] + ' '
    }
    b.innerHTML = str;
}