const toPut = (pOperador) => {
    let vNumber = toGetNumber();
    if(!vNumber == 0){
        toSetLabel(element(pCalc), vNumber);
        toCreate(vNumber, pOperador);
    }
    else{
        alert("Digite um número diferente de 0 (zero)!")
    };
};

const toCreate = (pValue, pElement) => {
    let vTr = element('tr');
    let vContent = document.createElement('td');
    vContent.append(pElement);
    vTr.append(vContent);
    toDefine(pValue, vContent);
    toDefine(pElement, vContent);
    alert(pValue + " " + pElement + " " + vContent)
    toEraseAll();
};

const toDefine = (pValue, pElement) => {
    var num = document.querySelectorAll('td').length;
    if(typeof pValue == "number"){
        pElement.setAttribute('grupo', num);
        pElement.classList.add('valor');
        console.log("foi número");
    }
    if(typeof pValue == "string"){
    pElement.setAttribute('grupo', num);
        pElement.setAttribute('hidden', true);
        pElement.classList.add('operador');
        console.log("foi operador")
    }
    return num++;
};

function ver (){
    let getr = document.querySelectorAll('td');
    for (let elem of getr){
        //console.log(elem.getAttribute('grupo'));
        console.log(elem)
    }
    console.log(getr.length)
};