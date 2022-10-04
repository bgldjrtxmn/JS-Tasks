let a = document.querySelector('.btn4');
let b = document.querySelector('.out4');
let c = document.querySelectorAll('.sp4');
let g = []
let m = c.forEach(function(elem) {
    let y = elem.getAttribute('data');
    g.push(y)
});

a.onclick = () => {
    b.innerHTML = g
}