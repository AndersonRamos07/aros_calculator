const log = console.log;

const getElm = (pIdentifier) =>
    document.querySelector(pIdentifier);
    
const getAtt = (pElement, pKey) =>
    pElement.getAttribute(pKey);
    
const setAtt = (pElement, pKey, pValue) =>
    pElement.setAttribute(pKey, pValue);
    
const toConfirm = (pService, pOkOrDeny) => {
    // 1 to OK or 0 to Deny
    return pOkOrDeny == 0?
    confirm(`Deseja cancelar a ${pService}?`):
    confirm(`Deseja ${pService}?`);
};

const toModif = (pElement, pValue) => {
    return pElement.innerText = pValue;
};