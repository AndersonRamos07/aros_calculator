// ******* ELEMENTS

let visor_Main = elementDOM('#visorMain', 1);
let visor_Sub = elementDOM('#visorSub', 1);

let btn_C = elementDOM('#btnC', 1);
let btn_CE = elementDOM('#btnCE', 1);
let btn_DEL = elementDOM('#btncDEL', 1);
let btn_MEMO = elementDOM('#btnMEMO', 1);

let btn_DOT = elementDOM('#btnDEL', 1);
let btn_EQUALS = elementDOM('#btnEQUALS', 1);

let dataList = elementDOM('datalist', 1);

let btns_NUMB = elementDOM('.numbers > button', 0);
let btns_OPERATORS = elementDOM('.operators > button', 0);


// ******* EVENTS

eventListener(btn_C, 'click', toZero);
eventListener(btn_CE, 'click', toClear);

btns_NUMB.forEach(
    btn => btn.addEventListener('click', getDigit,
        {capture: false})
);

btns_OPERATORS.forEach(
    btn => btn.addEventListener('click', getOperator,
            {capture: false})
);
