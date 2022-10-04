let a = document.querySelector('.btn9');
let arr = [
    [4, 3, 2],
    [2, 5],
    [0, 0, 0, 0, 0]
];

a.onclick = () => {
    let b = 0;
    for (i = 0; i < arr.length; i++) {
        for (k = 0; k < arr[i].length; k++) {
            if (arr[i].length > b) {
                b = arr[i].length - 1
            }
        }
    }
    console.log(b)
}