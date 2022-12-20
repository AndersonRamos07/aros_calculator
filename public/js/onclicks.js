//#region ******* ELEMENTS

let visor_Main = elementDOM('#visorMain', 1);
let visor_Sub = elementDOM('#visorSub', 1);

let btn_C = elementDOM('#btnC', 1);
let btn_CE = elementDOM('#btnCE', 1);
let btn_DEL = elementDOM('#btnDEL', 1);
let btn_MEMO = elementDOM('#btnMEMO', 1);

let btn_DOT = elementDOM('#btnDOT', 1);
let btn_EQUALS = elementDOM('#btnEQUALS', 1);

let dataList = elementDOM('datalist', 1);

let btns_NUMB = elementDOM('.numbers > button', 0);
let btns_OPERATORS = elementDOM('.operators > button', 0);

let tb = elementDOM('table', 1);
//#endregion

//#region ******* SUB_ELEMENTS

let operator = [ " + " , " - " , " x " , " ÷ " ];
//#endregion

//#region ******* EVENTS

eventListener(btn_C, 'click', toClear);
eventListener(btn_CE, 'click', toClearIn);
eventListener(btn_DEL, 'click', toDel);
eventListener(btn_EQUALS, 'click', toCalculate);
eventListener(btn_MEMO, 'click', toPutTable);

btns_NUMB.forEach(
    btn => btn.addEventListener('click', getDigit,
        {capture: false})
);

btns_OPERATORS.forEach(
    btn => btn.addEventListener('click', getOperator,
            {capture: false})
);
//#endregion