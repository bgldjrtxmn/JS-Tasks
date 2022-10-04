let b10 = [
    [1, 2, 3],
    [3, 4, 6],
    [4, 5, 7],
    [8, 9, 3]
];

function t10() {
    const b10_res = b10.filter(elem => elem.filter(el => el === 3).length);
    return b10_res;
}

document.querySelector('.b-10').onclick = () => {
    console.log(t10());
}