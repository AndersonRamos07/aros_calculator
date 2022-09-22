const toPut = (pOperador) => {
    let vNumber = toGetNumber();
    toSetLabel(element(pCalc), vNumber);
    toCreate(pOperador);
};

const toGetNumber = () => {
    return parseInt(element(pMain).innerText);
};

const toCreate = (pElement) => {
    let vTr = element('tr');
    let vContent = document.createElement('td');
    vContent.append(pElement);
    vTr.append(vContent);
    toDefine(pElement, vContent);
    toEraseAll();
};

const toDefine = (pValue, pElement) => {
    var num = 0;
    if(typeof pValue == "number"){
        //pElement.setAttribute('grupo', 'valor');
        pElement.classList.add('valor');
    }
    if(typeof pValue == "string"){
        //pElement.setAttribute('grupo', 'operador');
        pElement.classList.add('operador');
    }
    return num++;
};