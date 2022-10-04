function fn6(min, max) {
    let a = Math.random() * (max - min) + min;
    return Math.floor(a)
}

console.log(fn6(1, 100))