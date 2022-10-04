let a = document.querySelector('.btn12');
let b = document.querySelector('.out12');
let str = 'The name conjures up visions of plum pudding and Christmas punch quaint coaching inns and cozy firesides but also of orphaned and starving children';


a.onclick = () => {
    let split = str.split('');
    let s = new Set(str);
    console.log(s)
}