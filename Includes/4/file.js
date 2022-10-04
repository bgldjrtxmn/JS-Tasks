let a = document.querySelector('.i4');
let b = document.querySelector('.btn4');
let c = document.querySelector('.out4');
let d = [
    {'one': 'ddsd'},
    {'two': 'fddf'},
    {'three': 'dfdfv'},
    {'four': 'aac'},
];


b.onclick = () => {
    let v = a.value;
    let p = parseInt(v);
    let f = d.filter(item => {
        return  item.name.includes('c')
      });
      console.log(f)
}