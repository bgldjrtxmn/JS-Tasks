let a = [3, 14, 15, 92, "6", "5", "hello", 32];
let b = a.filter(function(i) {
    if (typeof i == 'number') {
        return i
    }
})

console.log(b)