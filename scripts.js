import Operacao, { Elemento, Equacao, Operador } from "./models.js";

export default function domQS(p,q,v) {
    if(q == 0){
        let result = document.querySelector(p).innerHTML; 
        return result;
    }
    else if(q == 1){
        return document.querySelector(p).innerHTML = v;
    }
    else{
      console.log(`parâmetros: ${p}, ${q}, ${v}`);
      alert("Se liga nos parâmetros!");
    }
};

export const cSomente = ()=> domQS("#valor", 1, 0);

export const capturaClique = (e)=>{
    let cliqueValue = e.target.value;
    let cliqueClasse = e.target.className;
    
    if( cliqueClasse == "btnNum"){
        return insereNumero(cliqueValue);
    }
    if( cliqueClasse == "operacao"){
        return operacao(cliqueValue);
    }
};

export const insereNumero = (p)=>{
    let valorNoVisor = mostraNoVisor();
    if(valorNoVisor){ domQS("#valor", 1, p); }
    else{ porNoVisor(p, "#valor"); }
};

export const mostraNoVisor = ()=>{
    let valorNoVisor = domQS("#valor", 0, 0);
    if(valorNoVisor == 0 || valorNoVisor == "off") return true;
    else { return false };
};

export const porNoVisor = (p,q)=>{
    if(p == "zerar"){
        return domQS(q, 1, 0);
    }
    else{
        let valorAntes = domQS(q, 0, 0);
        let valorDepois = valorAntes.concat(p);
        return domQS(q, 1, valorDepois);
    }
};

export const cEE = ()=>{
    let valorNoVisor = domQS("#valor", 0, 0);
    let resultar = "";
    if(valorNoVisor.length == 1 && valorNoVisor == 0){
        console.log("é zero já!"); resultar = cSomente();
    }
    else{
        if(valorNoVisor.length != 1){ resultar = valorNoVisor.slice(0, -1); }
        if(valorNoVisor.length == 1){ resultar = cSomente(); }
    }
    return domQS("#valor", 1, resultar);
}

export const operacao = (p)=>{
    let valorAntes = domQS("#valor",0,0);
    let result = "";
    if(valorAntes == "off"){ alert("off"); }
    if (valorAntes == 0 && p == "divi"){
        alert("Impossível dividir por zero!");
        result = 0;
    }
    result = definirOperador(p, valorAntes);
    porNoVisor("zerar","#valor"); 
    domQS("#calculo", 1, result)
    return result;
}

export const definirOperador = (p, q)=>{
    let operador = "";
    let result = "";
    let valorDepois = q[q.length - 1];
    console.log(`p: ${p} e q:${q}`)
    //console.log(valorDepois + " <valorDepois>")
    switch(p){
        case "soma": operador = " + "; break;
        case "subt": operador = " - "; break;
        case "mult": operador = " x "; break;
        case "divi": operador = " / "; break;
    }
    result = q + operador;
    salvar(q,p);
    return result;
}
export const salvar = (p, q)=>{
    var elemento = new Elemento(p, q)
    domQS("#primeiro", 1, elemento.getElemento())
    domQS("#sinal", 1, elemento.getSinal())
}

export const calcular = ()=>{
    let primeiro = domQS("#primeiro",0,0)
    let segundo = domQS("#valor",0,0)
    let sinal = domQS("#sinal",0,0)
    console.log(`primeiro: ${primeiro}, segundo: ${segundo} e sinal:${sinal}`)
    var result = new Operacao(primeiro, segundo, sinal)
    porNoVisor(`${segundo} = ${result.equacionar()}`,"#calculo")
    porNoVisor("zerar", "#valor")
    return result.equacionar();
}

//export const somar = (n1, n2)

var novoE;
var novoO;

export const criar = ()=>{
    let initialTerm = domQS("#valor",0,0);
    console.log(initialTerm + " <initialTerm>")
    novoE = new Elemento(initialTerm);
    novoO = new Operador("+");
    
    console.log(novoE.getElemento() + " <novoE.getElemento>")
    console.log(novoO.getOperador() + " <novoE.getElemento>")
    console.log(JSON.stringify(novoE) + " <novoE>")
    console.log(JSON.stringify(novoO) + " <novoO>")
    return session("in","calculo",novoE)
}

export const editar = ()=>{
    let initialTerm = domQS("#valor",0,0);
    console.log(initialTerm + " <initialTerm>")
    
    novoE.setElemento(initialTerm);
    novoO.setOperador("--")
    
    console.log(novoE.getElemento() + " <novoE.setElemento>")
    console.log(novoO.getOperador() + " <novoE.setElemento>")   
    console.log(JSON.stringify(novoE) + " <novoE>")
    console.log(JSON.stringify(novoO) + " <novoO>")
    return session("out", "calculo", 0) 
}
