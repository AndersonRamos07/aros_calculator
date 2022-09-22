const getNumber = (pNumber) => {
    let vIsItOn = element(pSwtc).checked;
    vIsItOn?
    toShow(pNumber) :
    console.log(vIsItOn);
};

const toShow = (pValue) => {
    let vElement = element(pMain).innerText;
    vElement == "." || vElement == 0? 
       toMerge(0, pValue):
       toMerge(vElement, pValue);
};

const toMerge = (pValuePrev, pValueNext) =>{
    let vElement = element(pMain);
    pValuePrev >= 0?
        toSetLabel(vElement, pValuePrev + pValueNext):
        toSetLabel(vElement, pValueNext);
};