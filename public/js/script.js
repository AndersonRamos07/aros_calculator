let width = window.innerWidth;
let height = window.innerHeight;

const pOnOff = '#onOff';
const pSwtc = '#switchMain';

const pMain = '#painelPrincipal';
const pCalc = '#painelCalculo';
const pHist = '#painelHistorico';

const element = (pSelector) => document.querySelector(pSelector);

const toGetNumber = () => parseInt(element(pMain).innerText);

const orientation = () => {
    let orientation = "";
    width > height?
    orientation = "landscape":
    orientation = "portrait";
    return element("#orientation").innerHTML = orientation;
};
