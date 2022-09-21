const toCreate = () => {
    let numero = element(pMain).innerText;
    return numero;
}

const toPut = (pOperador) => {
    let num = `${toCreate()} ${toVerify(pOperador)} `;
    let tr = element('tr');
    let cell = document.createElement('td');
    cell.append(num);
    tr.append(cell);
    toEraseAll();
}

const toVerify = (pOperador) => {
    let result = "default";
    switch(pOperador){
        case "soma": result = "+"; break;
        case "subt": result = "-"; break;
        case "mult": result = "x"; break;
        case "divi": result = "/"; break;
    }
    return result;
};