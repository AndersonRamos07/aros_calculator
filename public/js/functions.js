// [ Visor ]
const toCheck = (pValue) =>
    visor_Main.innerText == "0" && visor_Main.innerText.length == 1? log("insere novo"): log("adiciona ao valor");

const toShow = (pValue) => {
    let vTog = toCheck(pValue, toPut);
    return visor_Main.textContent = pValue;
};

const toPut = (pValuePrev, pValueAdd, pTog) => {
    pTog? toShow(pValuePrev + pValueAdd):
        toShow(pValueAdd);
};

// [ C - Clear ]
const toZero = () => visor_Main.textContent = 0;

// [ CE - Clear Entry ]
const toClear = () => {
    let vElmText = visor_Main.innerText;
    let vLastOne = vElmText.slice(0, -1);
    
    vLastOne.length == 0?
        vElement.textContent = 0:
        vElement.textContent = vLastOne;
};

// [ 0 ~ 9 . = ]
const getDigit = (e) => {
    e.stopPropagation()
    let vDigit = e.currentTarget.value;
    log(vDigit);
    toCheck(vDigit);
    return e.currentTarget.value;
};

// [ Operators ]
const getOperator = (e) => {
    let operator = getDigit(e);
    switch(operator){
        case "divi":
            break;
        case "mult":
            break;
        case "subt":
            break;
        case "soma":
            break;
    }
};

// [ Calculate ]
const toCalculate = () => {
    
};
