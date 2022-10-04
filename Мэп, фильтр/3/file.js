let a = [4, "3", 6, 7, "12", 34, "56", 78, 90, 11];
let map = a.map(function(i) {
    if (typeof i == 'number') {
        return i
    }
})
console.log(map)