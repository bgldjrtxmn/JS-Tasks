let a = document.querySelector('.btn17');
let b = document.querySelector('.out17');
let c = {
    "iis8sj": {
        "name": "Ivan",
        "age": 27,
    },
    "iiss7j": {
        "name": "Petr",
        "age": 26,
    },
    "s3s8sj": {
        "name": "Serg",
        "age": 47,
    },
}

let d = [];

a.onclick = () => {
    for (let key in c) {
        if (c[key]['age'] > 30) {
            d += c[key]['name'] + ' ';
        }
    }
    b.innerHTML = d;
}