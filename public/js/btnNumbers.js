// buttons

const botao = getElm(".numbers")

botao.onclick = (event)=>{
    let num = event.target.value;
    //getNumb(num)
    inputVisor(num)
};
/*
const getNumb = (param) => {
    let alg = getElm(eStrong);
    alg.innerText = param;
}
*/