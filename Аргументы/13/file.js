function fn13a (out){
    document.querySelector('.out13').innerHTML = out;
}

function fn13b (arr, drawFunction){
    drawFunction(arr);
}

fn13b([1,2,3,4,5], fn13a)