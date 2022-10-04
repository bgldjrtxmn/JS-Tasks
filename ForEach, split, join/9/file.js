let a = [
    ['hi', 'mahai'],
    ['test', 'best']
];
let b = [];

for (i = 0; i < a.length; i++) {
    for (k = 0; k < a[i].length; k++) {
        b.push(a[i][k])
    }
}
console.log(b.join('-'))