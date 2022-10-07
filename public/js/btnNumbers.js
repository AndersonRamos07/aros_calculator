const getNumb = (pNumber) => {
    let vIsItOn = element(pSwtc).getAttribute('disabled');
    vIsItOn == "true"?
        toShow(pNumber) :
        log(vIsItOn);
};

const toShow = (pValue) => {
    let vElement = element("strong");
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
