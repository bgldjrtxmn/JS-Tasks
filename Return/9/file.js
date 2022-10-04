function fn9(a,b){
    let res = Math.pow(a,b);

    if (res % 2 == 0){
        return true;
    }
    else {
        return false;
    }
}

console.log(fn9(3,3))