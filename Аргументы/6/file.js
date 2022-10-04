function fn6 (arr, elem){
    document.querySelector(elem).innerHTML = arr.join(' ');
}

fn6([1,2,3,4,5], '.out6')