/*
*   #fator = argumento
*   #termo / teor / modo = parametro
*   #valor = valor
*
*   #domqSaEL = dom(document), qS(querySelector), aEL(addEventListener)
*/
import Dom,
{
    capturaClique,
    cSomente,
    cEE,
    calcular,
    del,
    maisOuMenos,
    showMemo
}
from "./scripts.js";

function domqSaEL(termo,fator){
    document.querySelector(termo).addEventListener("click", fator);
};

domqSaEL(".num", capturaClique);
domqSaEL(".opera", capturaClique);
domqSaEL(".cSomente", cSomente);
domqSaEL(".cEE", cEE);
domqSaEL(".calcular", calcular);
domqSaEL(".del", del);
domqSaEL(".maisOuMenos", maisOuMenos);
domqSaEL(".memo", showMemo);