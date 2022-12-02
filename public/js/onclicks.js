// ******* ELEMENTS

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

// ******* SUB_ELEMENTS

let operator = [ " + " , " - " , " x " , " ÷ " ]
/*
let vM_txtC = visor_Main.textContent;
let vM_iTxt = visor_Main.innerText;

let vS_txtC = visor_Sub.textContent;
let vS_iTxt = visor_Sub.innerText;
*/

// ******* EVENTS

eventListener(btn_C, 'click', toZero);
eventListener(btn_CE, 'click', toClear);
eventListener(btn_DEL, 'click', toDel);

btns_NUMB.forEach(
    btn => btn.addEventListener('click', getDigit,
        {capture: false})
);

btns_OPERATORS.forEach(
    btn => btn.addEventListener('click', getOperator,
            {capture: false})
);

//eventListener(btn_MEMO, 'click', toCreateEquation)