const getContext = () => {
    let vContext = getElm(context);
    let vOnOff = getElm(pDot);
    let vAtt = getAtt(vContext, aDis);
    let vSwitch = getElm(pSwtc);
    if(vAtt == "false"){
        let vResp = toConfirm("ligar a calculadora", 1);
            if(!vResp){ alert("OK"); }
                else{
                    setAtt(vContext, aDis, true);
                    setAtt(vSwitch, aDis, true);
                    setAtt(vOnOff, "checked", true);
                    toModif(vSwitch, "ligado");
                    }
    }
};

const isOn = () => {
    let vElm = getElm(pSwtc);
    let vSwt = getAtt(vElm, aDis);
    
    return vSwt == "false"? false : true;
};

// [ C ]
const toEraseAll = () => {
    toSetLabel(getElm("strong"), 0);
};

// [ CE ]
const toErase = () => {
    let vElement = getElm("strong");
    let vElmText = vElement.innerText;
    let vLastOne = vElmText.slice(0, -1);
    
    vLastOne.length == 0?
        toSetLabel(vElement, 0):
        toSetLabel(vElement, vLastOne);
};

const toChange = () => {
    let vOnOff = getElm(pDot).checked;
    log(vOnOff)
};
