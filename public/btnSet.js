const element = (id) => document.querySelector(id);

const onOff = () => element('#onOff').checked? true : false;

const toSwitch = (pToCheck) => {
    let checked = element(pToCheck).checked;
    let onOff = element('#painelPrincipal').innerText; 
    checked?
        onOff = "on":
        onOff = "off";
    return element('#onOff').innerText = onOff;
};