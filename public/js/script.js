let width = window.innerWidth;
let height = window.innerHeight;

const context = '#context';
const aDis = 'disabled';
const aCheck = 'checked';

const pOnOff = '#onoff';
const pDot = '#onOffDot';
const pSwtc = '#switchTxt';

const pMain = '#painelPrincipal';
const pCalc = '#painelCalculo';
const pHist = '#painelHistorico';

const orientation = () => {
    let orientation = "";
    width > height?
    orientation = "landscape":
    orientation = "portrait";
    return element("#orientation").innerHTML = orientation;
};

const toSetColor = (pElement, pColor) => pElement.style.color = pColor;

const toSetLabel = (pElement, pLabel) => pElement.innerText = pLabel;

const toSetBG = (pElement, pColor) => pElement.style.backgroundColor = pColor;
