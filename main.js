import Dom,
{
    capturaClique,
    cSomente,
    cEE,
    calcular,
    criar,
    editar,
}
from "./scripts.js";

function domqSaEL(p,q){
    document.querySelector(p).addEventListener("click", q);
};

domqSaEL(".num", capturaClique);
domqSaEL(".opera", capturaClique);
domqSaEL(".cSomente", cSomente);
domqSaEL(".cEE", cEE);
domqSaEL(".calcular", calcular);
domqSaEL(".getE", criar);
domqSaEL(".setE", editar);