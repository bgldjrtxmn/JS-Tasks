let a = document.querySelector('.btn18');
let b = document.querySelector('.out18');
let c = {
    "red": ['Akademmistechko', 'Nyvky', 'Universytet', 'Lisova'],
    "blue": ['Minska', 'Obolon', 'Pochaina', 'Holosiivska'],
    "green": ['Syrets', 'Zoloti Vorota', 'Klovska', 'Vidubichi']
};


a.onclick = () => {
    let i = document.querySelector('.i18').value;
    let d = [];
    for (let key in c) {
        if (i == key) {
            d.push(c[key])
        }
    }
    console.log(d)
    b.innerHTML = d;
}