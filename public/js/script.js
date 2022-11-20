//is it on?

const isOn = () => {
let uio = getElm(pSwtc).getAttribute(aDis)
log(uio)};
// elements

const eContext = '#context';
const pDot = '#onOffDot';
const eMain = '#main';
const eStrong = 'strong';

const aDis = 'disabled';
const aCheck = 'checked';
const pOnOff = '#onoff';
const pSwtc = '#switchTxt';

const pHist = '#painelHistorico';

// functions

const toSetColor = (pElement, pColor) => pElement.style.color = pColor;

const toSetLabel = (pElement, pLabel) => pElement.innerText = pLabel;

const toSetBG = (pElement, pColor) => pElement.style.backgroundColor = pColor;
