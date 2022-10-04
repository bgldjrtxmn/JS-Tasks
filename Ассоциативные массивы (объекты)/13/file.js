let a = document.querySelector('.btn13');
let b = document.querySelector('.out13');
let c = {
    'prim': 'hello',
    'one': 4,
    'testt': 'vodoley',
    'ivan': 133
};
let d = 0;
a.onclick = () => {
    for (let key in c) {
        if (typeof c[key] == 'number') {
            d += c[key]
        }
    }

    b.innerHTML = d
}