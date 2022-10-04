let a = document.querySelector('.btn10');
let b = document.querySelector('.out10');
let c = [3, 14, 15, 92, 6];
a.onclick = () => {
    b.innerHTML = c.reverse();
}