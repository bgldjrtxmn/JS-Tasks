let a = document.querySelector('.out11');

function fn11 (...args){
    let b = 0;
    for (i = 0; i < args.length; i++){
        b += args[i];
    }

    a.innerHTML = b;
}

fn11(1,2,3,4,5)