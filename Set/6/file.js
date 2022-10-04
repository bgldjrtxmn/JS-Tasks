let a = document.querySelector('.btn6');
let b = document.querySelector('.out6');
let arr = ['hi', 'i', 'am', 'Tom', 'Tom'];
let s = new Set(arr);

a.onclick = () => {
    b.innerHTML = s.size
}