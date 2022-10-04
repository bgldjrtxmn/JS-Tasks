let a = document.querySelector('.btn10');
let arr = [4, 6, 9, 'Hello'];

a.onclick = () => {
    let am = {};
    for (i = 0; i < arr.length; i++) {
        let g = arr[i];
        am[g] = g;
    }
    console.log(am)
}