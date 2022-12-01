let log = console.log;

let elementDOM = (pSelector, pType) => {
    if(pType == 1)
        return document.querySelector(pSelector)
    else
        return document.querySelectorAll(pSelector)
};

let eventListener = (pVar, pType, pCallback) => {
    pVar.addEventListener(pType, (e) => {
        pCallback(e);
    })
};

let handleTextContent = (pElement, pContent) => {
     return pElement.textContent = pContent;
}
