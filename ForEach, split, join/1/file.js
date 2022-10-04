let a = [4, 5, 6, 7, 12, 34, 56, 78, 90, 11];
let n = []
let b = a.forEach(function(elem, index) {
    let g = elem * 2
    n.push(g)
});
console.log(n);