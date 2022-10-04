let a = document.querySelector('input');
let b = document.querySelector('button');

b.onclick = function() {
    let t = a.value;
    let c = parseFloat(t);
    console.log(c)
}