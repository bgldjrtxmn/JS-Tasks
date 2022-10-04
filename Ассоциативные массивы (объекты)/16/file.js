let a = document.querySelector('.btn16');
let b = document.querySelector('.out16');
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

let d = []

a.onclick = () => {
    for (let key in c) {
        d += c[key]['name'] + ' ';
    }
    b.innerHTML = d;
}