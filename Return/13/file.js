function fn13 (min, max){
    let a = Math.random() * (max - min) + min;
    return Math.floor(a)
}

console.log(fn13(1,10));