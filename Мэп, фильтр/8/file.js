let a = [3, 14, 15, 92, "6", "5", "hello", 32];
let b = a.filter(function(i, k) {
    if (k % 2 == 0) {
        return k
    }
})
console.log(b)