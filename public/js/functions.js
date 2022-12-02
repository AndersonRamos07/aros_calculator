// [ Visor ]
const toCheck = (pValue) =>{
    let resp;
    visor_Main.innerText == "0" &&
        visor_Main.innerText.length == 1?
            resp = false: resp = true;
    return toPut(visor_Main.textContent, pValue, resp);
};

const toShow = (pValue) => visor_Main.textContent = pValue;

const toPut = (pValuePrev, pValueAdd, pTog) => {
    pTog? toShow(pValuePrev + pValueAdd):
        toShow(pValueAdd);
};

// [ C - Clear ]
const toZero = (pElement) => {
    pElement == undefined?
        visor_Main.textContent = 0:
        pElement.textContent = 0;
};

// [ CE - Clear Entry ]
const toClear = () => {
    let vLastOne = visor_Main.innerText.slice(0, -1);
    vLastOne.length == 0?
        visor_Main.textContent = 0:
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
    toCreateAlgharism(resp);
    toCreateAlgharism(operator[i]);
    return visor_Sub.innerText == "0"?
    visor_Sub.innerText = resp + operator[i]:
    visor_Sub.innerText += resp + operator[i];
};

// [ Calculate ]
const toCalculate = (pValue) => {
    log(`pValue: ${pValue}`)
};

const toCreateAlgharism = (pValue) => {
    let alg = document.createElement('td');
    alg.append(pValue);
    log(alg.textContent + " <algarismo>")
    let linha = document.querySelector('tr');
    linha.append(alg);
    log(linha.textContent + " <linha>")
};