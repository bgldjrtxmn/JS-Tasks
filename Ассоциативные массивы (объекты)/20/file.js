let a20 = {
    "red": [
        ['Akademmistechko', 1],
        ['Nyvky', 0],
        ['Universytet', 3],
        ['Lisova', 1]
    ],
    "blue": [
        ['Minska', 1],
        ['Obolon', 0],
        ['Pochaina', 2],
        ['Holosiivska', 0]
    ],
    "green": [
        ['Syrets', 1],
        ['Zoloti Vorota', 2],
        ['Klovska', 0],
        ['Vidubichi', 1]
    ],
}

function f20() {
    let out = '';
    for (let key in a20) {
        for (let i = 0; i < a20[key].length; i++) {
            if (a20[key][i][1] === 2) {
                out += a20[key][i][0] + ' ';
            }
        }
    }
    document.querySelector('.out-20').innerHTML = out;
}

document.querySelector('.b-20').onclick = f20;