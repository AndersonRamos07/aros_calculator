// [ Visor ]
const toCheck = (pValue) =>{
    let resp;
    visor_Main.innerText == "0" && visor_Main.innerText.length == 1? resp = false: resp = true;
    return toPut(visor_Main.textContent, pValue, resp);
};

const toShow = (pValue) => visor_Main.textContent = pValue;

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
        visor_Main.textContent = 0:
        visor_Main.textContent = vLastOne;
};

// [ 0 ~ 9 . = ]
const getDigit = (e) => {
    e.stopPropagation()
    let vDigit = e.currentTarget.value;
    vDigit == "."?
        vDigit = toDot(vDigit):
        log("é número");
        
    toCheck(vDigit);
    return e.currentTarget.value;
};

const toDot = (pDot) =>{
    let resp;
    visor_Main.textContent.includes(".")?
        resp = "":
        resp = ".";
    return resp;
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
