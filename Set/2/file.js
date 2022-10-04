let a = document.querySelector('.btn2');
let s = new Set();

a.onclick = () => {
    let i = document.querySelector('.i2').value;
    s.add(i);
    console.log(s)
}