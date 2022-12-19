// [ Visor ]
const toCheck = (pValue) =>{
    let resp;
    visor_Main.innerText == "0" &&
        visor_Main.innerText.length == 1?
            resp = false: resp = true;
    return toPut(visor_Main.textContent, pValue, resp);
};

const toShow = (pValue, pVisor) => {
    pVisor == undefined? visor_Main.textContent = pValue:
    pVisor.textContent = pValue;
};

const toPut = (pValuePrev, pValueAdd, pTog, pVisor) => {
    if(pVisor == undefined){
        pTog? toShow(pValuePrev + pValueAdd, pVisor):
        toShow(pValueAdd, pVisor);
    }else{
        pTog? toShow(pValuePrev + pValueAdd, pVisor):
        toShow(pValueAdd, pVisor);
    }
};

const toZero = (pElement) => {
    pElement != undefined? pElement.textContent = 0: visor_Main.textContent = 0
};

// [ C - Clear ]
const toClear = () => toZero();

// [ CE - Clear Entry ]
const toClearIn = () => {
    let vLastOne = visor_Main.innerText.slice(0, -1);
    vLastOne.length == 0?
        toZero():
        visor_Main.textContent = vLastOne;
};

// [ DEL - Delete Entries ]
const toDel = () => {
    toZero();
    toZero(visor_Sub);
};

// [ 0 ~ 9 . = ]
const getDigit = (e) => {
    e.stopPropagation()
    let vDigit = e.currentTarget.value;
        vDigit == "."?
            vDigit = toDot(vDigit):
            log("é número");
        vDigit == "="?
            toCalculate(vDigit):
            toCheck(vDigit);
    return vDigit;
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
    let i;
    let vOperator = getDigit(e);
    let resp = visor_Main.textContent.slice(0, -4);
    switch(vOperator){
        case "divi": i = 3; break;
        case "mult": i = 2; break;
        case "subt": i = 1; break;
        case "soma": i = 0; break;            
    }
    toZero();
    let alg = new Algharism(resp);
    alg.toLog();
    toPut(0, alg.value, false, visor_Sub)
};

// [ Calculate ]
const toCalculate = () => {
    log("foi")
    alert("eh doido!")
};

const toCreateAlgharism = (pValue) => {
    let qtd = document.querySelectorAll('thead > td');
    let algL = document.createElement('td');
    let alg = document.createElement('td');
    let titleL = document.querySelector('thead');
    let linha = document.querySelector('tr');
    
    alg.append(pValue);
    algL.append(qtd.length);
    linha.append(alg);
    titleL.append(algL);
    
    log(alg.textContent + " <algarismo>")
    log(linha.textContent + " <linha>")
    log(qtd.length + " <qtd.length>")
    
};
