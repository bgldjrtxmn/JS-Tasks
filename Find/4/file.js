let a = document.querySelector('.btn4');
let b = document.querySelector('.out4');
let c = 'Hi piples, my name is Tom';


a.onclick = () =>{
    let u = c.split(' ')
    let y = u.find(item => {
        if (item == 'Tom'){
            return item           
        }
    })
    b.innerHTML = y
}