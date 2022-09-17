const getNumber = (pNumber) => {
    let isItOn = element(pSwtc).checked;
    isItOn?
    show(pNumber) :
    console.log(isItOn);
};

const show = (pValue) => {
    let vElement = element(pMain);
    console.log(pValue);
    toSetLabel(vElement, pValue);
}
