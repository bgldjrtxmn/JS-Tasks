let arr = [3, 14, 15, 92, 0, 2];
let b = arr.filter(function(i) {
    if (i % 2 == 0) {
        return i
    }
})
console.log(b)