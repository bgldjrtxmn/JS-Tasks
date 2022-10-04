function fn11 (...item){
    let a = 0;

    for (i = 0; i < item.length; i++){
        a += item[i];
    }

    return a;
}

console.log(fn11(1,2,4,10))