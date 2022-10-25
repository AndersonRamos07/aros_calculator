const getNumb = (pNumber) => {
    isOn()?
        toShow(pNumber) :
        log("sem chance");
};

const toShow = (pValue) => {
    let vElement = getElm("strong");
    let vElm = vElement.innerText;
    
    vElm == 0 || vElm == "_algarismo_"?
       toMerge(0, pValue, vElement):
       toMerge(vElm, pValue, vElement);
};

const toMerge = (pValuePrev, pValueNext, pElement) =>{
    pValuePrev >= 0?
        toSetLabel(pElement, pValuePrev + pValueNext):
        toSetLabel(pElement, pValueNext);
};

const botao = document.querySelector(".numbers")

botao.onclick = (event)=>{
    let num = event.target.value
    getNumb(num)
}
