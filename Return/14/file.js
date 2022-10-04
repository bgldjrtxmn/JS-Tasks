let a = document.querySelector('.out14');

function fn14 (min, max){
    let one = Math.floor(Math.random() * (max - min) + min);
    let two = Math.floor(Math.random() * (max - min) + min);
    let three = Math.floor(Math.random() * (max - min) + min);

    a.style.background = `rgb(${one}, ${two}, ${three})`;
}

fn14(0, 255);