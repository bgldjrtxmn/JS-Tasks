function fn7(min, max) {
    let a = Math.random() * (max - min) + min;
    let b = Math.random() * (max - min) + min;
    let c = Math.random() * (max - min) + min;
    return 'rgb(' + Math.floor(a) + ',' + Math.floor(b) + ',' + Math.floor(c) + ')'
}

console.log(fn7(0, 256))