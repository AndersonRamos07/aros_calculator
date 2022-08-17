import Operacao, { Elemento, Equacao, Operador } from "./models.js";

export default function domQS(fator,termo,valor) {
    if(termo == "out"){
        return document.querySelector(fator).innerHTML;
    }
    else if(termo == "in"){
        return document.querySelector(fator).innerHTML = valor;
    }
    else{
      console.log(`parâmetros: ${p}, ${q}, ${v}`);
      alert("Se liga nos parâmetros!");
    }
};

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

export const cSomente = ()=> domQS("#painelPrincipal", "in", 0);

export const cEE = ()=>{
    let valorNoVisor = domQS("#painelPrincipal", "out", 0);
    let resultar = "";
    if(valorNoVisor.length == 1 && valorNoVisor == 0){
        console.log("é zero já!"); resultar = cSomente();
    }
    else{
        if(valorNoVisor.length != 1){ resultar = valorNoVisor.slice(0, -1); }
        if(valorNoVisor.length == 1){ resultar = cSomente(); }
    }
    return domQS("#painelPrincipal", "in", resultar);
}

export const del = ()=>{
    cSomente();
    visor("#painelCalculo","incluir", "...")
};


export const insereNumero = (valor)=>{
    let valorNoVisor = visor("#painelPrincipal", "checar", 0);
    if(valorNoVisor){ domQS("#painelPrincipal", "in", valor); }
    else{ 
        let valorAntes = domQS("#painelPrincipal", "out", 0);
        let valorDepois = valorAntes.concat(valor);
        return domQS("#painelPrincipal", "in", valorDepois);
     }
};

export const visor = (fator, termo, valor)=>{
    switch(termo){
        case "zerar": return domQS(fator, "in", 0);
        break;
        case "incluir": return domQS(fator, "in", valor);
        break;
        case "checar":
            let valorNoVisor = domQS("#painelPrincipal", "out", 0);
            if(valorNoVisor == 0 || valorNoVisor == "off") return true;
            else { return false };
        break;
    }
};

export const operacao = (fator)=>{
    let valorAntes = domQS("#painelPrincipal","out",0);
    let result = "";
    if(valorAntes == "off"){ alert("off"); }
    if (valorAntes == 0 && fator == "divi"){
        alert("Impossível dividir por zero!");
        result = 0;
    }
    result = definirOperador(fator, valorAntes);
    visor("#painelPrincipal","zerar", 0); 
    domQS("#painelCalculo", "in", result)
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
    domQS("#primeiro", "in", elemento.getElemento())
    domQS("#sinal", "in", elemento.getSinal())
}

export const calcular = ()=>{
    let primeiro = domQS("#primeiro","out",0)
    let segundo = domQS("#painelPrincipal","out",0)
    let sinal = domQS("#sinal","out",0)
    console.log(`primeiro: ${primeiro}, segundo: ${segundo} e sinal:${sinal}`)
    var result = new Operacao(primeiro, segundo, sinal)
    visor("#painelCalculo", "incluir",`${primeiro} ${result.getSinal()} ${segundo} = ${result.equacionar()}`)
    visor("#painelPrincipal", "incluir", result.equacionar())
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
