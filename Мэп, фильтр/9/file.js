let a = [3, "hello", 4, "world", 5, "hi"];
let b = [];
let c = [];
let s = a.filter(function(i) {
    if (typeof i == 'number') {
        b.push(i)
    } else {
        c.push(i)
    }
})

console.log(b)
console.log(c)