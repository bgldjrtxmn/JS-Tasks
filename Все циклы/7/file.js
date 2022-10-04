let a = document.querySelector('.btn7');
let arr = [{ id: 23, name: 'Ivan' }, { id: 45, name: 'Petr' }];

a.onclick = () => {
    let am = {};
    for (i = 0; i < arr.length; i++) {
        let g = arr[i]
        am[g.id] = g.name;
    }
    console.log(am)
}