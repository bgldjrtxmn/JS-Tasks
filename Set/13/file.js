let a = document.querySelector('.btn13');
let b = document.querySelector('.out13');
let str = 'The name conjures up visions of plum pudding and Christmas punch quaint coaching inns and cozy firesides but also of orphaned and starving children';
let s = new Set(str);
let arr = str.split('');


a.onclick = () => {
    let str2 = '';
    for (let i of s) {
        let g = 0;
        for (k = 0; k < arr.length; k++) {
            if (i == arr[k]) {
                g += 1
            }
        }
        str2 += i + ' === ' + g + '</br>';
    }
    console.log(s)
    b.innerHTML = str2;
}