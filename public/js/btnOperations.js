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
    var num = document.querySelectorAll('td').length;
    if(typeof pValue == "number"){
        pElement.setAttribute('grupo', num);
        pElement.classList.add('valor');
    }
    if(typeof pValue == "string"){
    pElement.setAttribute('grupo', num);
        pElement.setAttribute('hidden', true);
        pElement.classList.add('operador');
    }
    return true;
};

function ver (){
    let getr = document.querySelectorAll('td');
    for (let elem of getr){
        console.log(elem.getAttribute('grupo'))
    }
    console.log(getr.length)
}