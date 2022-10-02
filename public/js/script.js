let width = window.innerWidth;
let height = window.innerHeight;

const pOnOff = '#onoff';
const pDot = '#onOffDot';
const pSwtc = '#switchTxt';

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

const toSetColor = (pElement, pColor) => pElement.style.color = pColor; //#1color

const toSetLabel = (pElement, pLabel) => pElement.innerText = pLabel;            //#2label

const toSetBG = (pElement, pColor) => pElement.style.backgroundColor = pColor; //#3bgColor

const toModify = (pElement, pStates, pLevel) =>{
    switch(pLevel){
        case "1":
            toSetColor(pElement, pStates[0]); break;
        case "2":
            toSetLabel(pElement, pStates[0]); break;
        case "3":
            toSetBG(pElement, pStates[0]); break;
        case "12":
            toSetColor(pElement, pStates[0]);
            toSetLabel(pElement, pStates[1]); break;
        case "13":
            toSetColor(pElement, pStates[0]);
            toSetBG(pElement, pStates[1]); break;
        case "23":
            toSetLabel(pElement, pStates[0]);
            toSetBG(pElement, pStates[1]); break;
        case "123":
            toSetColor(pElement, pStates[0]);
            toSetLabel(pElement, pStates[1]);
            toSetBG(pElement, pStates[2]); break;
    }
    return console.log("toModify");
}
