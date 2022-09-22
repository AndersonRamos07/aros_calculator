const toSwitch = (pToCheck) => {
    let vElement = element(pToCheck);
    let checked = vElement.checked;
    let onOff = element(pOnOff);
    checked?
        toModify(onOff, ["green", "on", "lightgreen"], "123"):
        toModify(onOff, ["red", "off", "orange"], "123");
    return console.log("toSwitch");
};

const toEraseAll = () => {
    toSetLabel(element(pMain), 0);
};

const toErase = () => {
    let vElement = element(pMain);
    let vElmText = vElement.innerText;
    let vLastOne = vElmText.slice(0, -1);
    vLastOne.length == 0?
        toSetLabel(vElement, 0):
        toSetLabel(vElement, vLastOne);
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
