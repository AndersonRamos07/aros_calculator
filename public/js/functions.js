//#region [ Visor ]
const toCheck = (pValue) =>{
    let resp;
    if(pValue == 9 || pValue < 9)
        toPut(calc_values[pValue], 0)
    if(pValue == 13 || pValue < 13 && pValue > 9)
    {
        getOperator(pValue)
        resp = calc_values[pValue]
    }
    if(pValue == 14)
    {
        toCalculate()
        resp = calc_values[pValue]
    }
    if(pValue == 15)
    {
        !toDot()?
            resp = calc_values[15]:
            resp = "";
        toPut(resp, 0)
    }
    //toShow(resp)
    
    //log(resp)
    //alert(resp)
    //return log(pValue);
};

const toShow = (pValue, pVisor) => {
    pVisor == undefined? visor_Main.textContent = pValue:
    pVisor.textContent = pValue;
};

const toPut = (pValueAdd, pTog) => {
    visor_Main.textContent == "0" &&
    visor_Main.textContent.length == 1?
        visor_Main.textContent = pValueAdd:
        visor_Main.textContent += pValueAdd;
};
//#endregion

const toZero = (pElement) => {
    pElement != undefined?
        pElement.textContent = 0:
        visor_Main.textContent = 0
};
//#region [ Nav Buttons ]
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
//#endregion

// [ 0 ~ 9 . = ]
const getDigit = (e) => {
    e.stopPropagation()
    let vDigit = parseInt(e.currentTarget.value);
    //log(vDigit)
    toCheck(vDigit);
};

const toDot = () =>{
    let resp;
    visor_Main.textContent.includes(".")?
        resp = true:
        resp = false;
    return resp;
};

// [ Operators ]
const getOperator = (pOperator) => {
    switch(pOperator)
    {
        case 10: log("soma"); break;
        case 11: log("subtracao"); break;
        case 12: log("multiplicacao"); break;
        case 13: log("divisao"); break;
    }
    toCreateAlgharism(visor_Main.textContent);
    toCreateAlgharism(calc_values[pOperator]);
    toZero();
};

const negativeOperation = (pValue) => {
    if(visor_Main.textContent == "0" ||
        visor_Main.textContent == 0)
        {
            log("com zero")
           return pValue;
        }
     return log("sem 0")
}
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