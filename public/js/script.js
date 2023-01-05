let log = console.log;

let elementDOM = (pSelector, pType) => {
    if(pType == 1)
        return document.querySelector(pSelector)
    else
        return document.querySelectorAll(pSelector)
};

const toCreateAlgharism = (pValue) => {
    let vQuantity = document.querySelectorAll('thead > td');
    let vAlghLabel = document.createElement('td');
    let vAlgh = document.createElement('td');
    let vTitleLabel = document.querySelector('thead');
    let vLine = document.querySelector('tr');
    
    vAlgh.append(pValue);
    vAlghLabel.append(vQuantity.length);
    vLine.append(vAlgh);
    vTitleLabel.append(vAlghLabel);
    
    log(vAlgh.textContent + " <algarismo>")
    log(vLine.textContent + " <linha>")
    log(vQuantity.length + " <qtd.length>")
};
