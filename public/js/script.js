let log = console.log;

let elementDOM = (pSelector, pType) => {
    if(pType == 1)
        return document.querySelector(pSelector)
    else
        return document.querySelectorAll(pSelector)
};