//#region ******* ELEMENTS
let visor_Main = elementDOM('#visorMain', 1);
let visor_Sub = elementDOM('#visorSub', 1);
let tb = elementDOM('table', 1);

let btn_C = elementDOM('#btnC', 1);
let btn_CE = elementDOM('#btnCE', 1);
let btn_DEL = elementDOM('#btnDEL', 1);
let btn_MEMO = elementDOM('#btnMEMO', 1);

let btn_DOT = elementDOM('#dot', 1);
let btn_EQUALS = elementDOM('#eql', 1);

let btns_MAIN = elementDOM('main > section > button', 0);
//#endregion

//#region ******* EVENTS
btn_C.addEventListener('click', (e) => toClear());
btn_CE.addEventListener('click', (e) => toClearIn());
btn_DEL.addEventListener('click', (e) => toDel());
btn_MEMO.addEventListener('click', (e) => toPutTable());
btn_EQUALS.addEventListener('click', (e) => toCalculate());

btns_MAIN.forEach(
    btn => btn.addEventListener('click', getDigit,
        {capture: false})
);