let a = document.querySelector('.out19');

let b = ['df', 'Yourdssfsdfsdfsfsfsdfsdfsfsdfsdf', 'payment', 'method', 'will', 'automatically', 'be', 'charged', 'in', 'advance', 'every'];
let v;

for (i = 0; i < b.length; i++) {
    let v = b[0].length;
    if (b[i].length > v) {
        v = b[i]
    }
    console.log(v);
}