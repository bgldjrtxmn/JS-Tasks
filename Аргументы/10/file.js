let a = document.querySelector('.out10');

function fn10 (...args){
    a.innerHTML = args.length
}

fn10(1,2,3)