function fn7 (arr = [], elem){
    if (arr.constructor === Array){
        document.querySelector(elem).innerHTML = arr.join(' ');
    }
    else {
        document.querySelector(elem).innerHTML = 'false'
    }
}

fn7([1,2,3,4,5,6], '.out7');