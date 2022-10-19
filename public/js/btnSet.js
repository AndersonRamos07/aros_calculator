const getContext = () => {
    let doc = getElm(context);
    let cod = getAtt(doc, "disabled");
    let onf = getElm("#switchTxt");
    if(cod == "true"){
        let resp = toConfirm("ligar a calculadora", 1);
        if(!resp){
            alert("OK");
        }
        else{
        setAtt(doc, "disabled", "false");
        toModif(onf, "ligado")}
    }
};

const toSwitch = (pToCheck) => {
    let vElement = element(pToCheck);
    let checked = vElement.checked;
    let onOff = element(pOnOff);
    checked?
        toModify(onOff, ["green", "on", "lightgreen"], "123"):
        toModify(onOff, ["red", "off", "orange"], "123");
    return console.log("toSwitch");
};

const toPower = () => {
    let vDot = element(pDot);
    let vSwitch = element(pSwtc);
    let vAble = vSwitch.getAttribute("disabled")
}

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

const isOn = () => {
    let vOnOff = element(pSwtc)
    let vIsOn = vOnOff.getAttribute("disabled");
    return vIsOn == "false"? turnOn(vIsOn): true;
}
