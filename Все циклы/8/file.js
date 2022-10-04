let a = document.querySelector('.btn8');
let arr = [{ id: 23, name: 'Ivan' }, { id: 45, name: 'Petr' }];


a.onclick = () => {
    let am = [];
    for (i = 0; i < arr.length; i++) {
        let g = arr[i];
        am.push(g.id)
    }
    console.log(am)
}