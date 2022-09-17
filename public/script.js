let width = window.innerWidth;
let height = window.innerHeight;

const pOnOff = '#onOff';
const pSwtc = '#switchMain';

const pMain = '#painelPrincipal';
const pCalc = '#painelCalculo';
const pHist = '#painelHistorico';

const element = (id) => document.querySelector(id);

const orientation = () => {
    let orientation = "";
    width > height?
    orientation = "landscape":
    orientation = "portrait";
    return document.querySelector("#orientation")
    .innerHTML = orientation;
};
