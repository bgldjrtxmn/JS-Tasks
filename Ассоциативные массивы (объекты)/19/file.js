let a = document.querySelector('.btn19');
let b = document.querySelector('.out19');
let c = {
    "red": ['Akademmistechko', 'Nyvky', 'Universytet', 'Lisova'],
    "blue": ['Minska', 'Obolon', 'Pochaina', 'Holosiivska'],
    "green": ['Syrets', 'Zoloti Vorota', 'Klovska', 'Vidubichi']
}
let d = [];

a.onclick = () => {
    let i = document.querySelector('.i19').value;
    let i2 = i.toLowerCase();

    for (let key in c) {
        if (key == i2) {
            d.push(c[key])
        }
    }
    b.innerHTML = d;
}