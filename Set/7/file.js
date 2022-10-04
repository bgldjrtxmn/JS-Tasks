let a = document.querySelector('.btn8');
let b = document.querySelector('.out8');



a.onclick = () => {
    let i = document.querySelector('.i8').value;

    let s = new Set(i);
    if (i.length == s.size && i.length > 6) {
        b.innerHTML = '1';
    } else {
        b.innerHTML = '0';
    }
}