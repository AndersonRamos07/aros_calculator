const toggleOnOff = getElm(pDot);

toggleOnOff.onchange = (event) => {
    let vState = event.target.checked;
    let vSwtc = getElm(pSwtc);
    log(vState); onOff(vState, vSwtc);
    return setAtt(vSwtc, aDis, vState);
};

const onOff = (pState, pElm) => {
    pState? toModif(pElm, 'ligado') :
        toModif(pElm, 'desligado');
};

// [ C ]
const toEraseAll = () => {
    toSetLabel(getElm("strong"), 0);
};

// [ CE ]
const toErase = () => {
    let vElement = getElm("strong");
    let vElmText = vElement.innerText;
    let vLastOne = vElmText.slice(0, -1);
    
    vLastOne.length == 0?
        toSetLabel(vElement, 0):
        toSetLabel(vElement, vLastOne);
};

const inputVisor = (pNumber) => {
    // is on?
    let previous = getElm(eStrong).innerText;
    let resp;
    console.log(previous)
    pNumber == "."? resp = dotar(pNumber, previous)
    
        previous == '_algarismo_' ||
        previous == '0' ||
        previous == 0?
            showVisor(pNumber):
            showVisor(previous + pNumber);
};

const showVisor = (pDigit) => {
   // is on?
    getElm(eStrong).innerText = pDigit;
};
