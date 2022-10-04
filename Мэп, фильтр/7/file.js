let a = ["php-7", "html", "css", 92, "6", "5", "hello", 32];
let b = a.filter(function(i) {
    if (i.length > 3) {
        return i;
    }
})
console.log(b)