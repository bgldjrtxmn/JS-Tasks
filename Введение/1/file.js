let a = document.querySelector('.out');

function getRandomInt() {
    let min = 117;
    let max = 132;
    let res = Math.floor(Math.random() * (max - min)) + min;
    a.innerHTML = res;
}

getRandomInt();