let a = [2, "hello", 3, "hi", 4, "Mazai"];
let s = [];
let b = a.forEach(function(elem) {
    if (typeof elem == 'number') {
        s.push(elem)
    }
})

console.log(s);