import Equacao, { Elemento, Operador } from "./models.js";
/*
import readJsonFile from "./functions.js";

readJsonFile('base.json')
*/

const session = (p, q, v)=>{
    if(p == "out"){
        let valor = sessionStorage.getItem(q);
        console.log(JSON.stringify(valor) + "<outSS>");
        return valor;
    }
    if(p == "in"){
        let valor = JSON.stringify(v);
        console.log(valor + " <valor>")
        return localStorage.setItem(q, valor);
        console.log("foi adicionado!")
    }
}

export default function domQS(p,q,v) {
    if(q == 0){
        let result = document.querySelector(p).innerHTML; 
    return result;
    }else if(q == 1){
        return document.querySelector(p).innerHTML = v;
    }
  else{
      console.log(`parâmetros: ${p}, ${q}, ${v}`)
      alert("Se liga nos parâmetros!")
  }
}

export const cSomente = ()=> domQS("#valor", 1, 0);

export const capturaClique = (e)=>{
 let cliqueValue = e.target.value;
 let cliqueClasse = e.target.className;
 
    if( cliqueClasse == "btnNum"){
    return insereNum(cliqueValue);
    }
   if( cliqueClasse == "operacao"){
       return operacao(cliqueValue)
   }
}
export const insereNum = (p)=>{
  let vis = mostraNoVisor();
  if(vis){ domQS("#valor", 1, p) }
  else{ porNoVisor(p); }
}
export const mostraNoVisor = ()=>{
  let now = domQS("#valor", 0, 0);
  if(now == 0 || now == "off") return true
  else {return false};
}
export const porNoVisor = (p)=>{
    if(p == "zerar"){
        return domQS("#valor", 1, 0)
    }else{
    let valueBefore = domQS("#valor", 0, 0);
    let valueFinal = valueBefore.concat(p);
    return domQS("#valor", 1, valueFinal);
    }
}

//export const alertar = ()=>{ alert("conectou o modulo");}

export const cEE = ()=>{
  let dut = domQS("#valor", 0, 0);
  let resultar = "";
  if(dut.length == 1 && dut == 0){
      console.log("é zero já!"); resultar = cSomente();
  } else{
    if(dut.length != 1){ resultar = dut.slice(0, -1); }
      if(dut.length == 1){ resultar = cSomente(); }
  }
  return domQS("#valor", 1, resultar);
}

export const operacao = (p)=>{
    let initialTerm = domQS("#valor",0,0);
    let result = "";
    if(initialTerm == "off"){ alert("off") }
    if (initialTerm == 0 && p == "divi"){
        alert("Impossível dividir por zero!");
        result = 0;
    }
    result = definirOperador(p, initialTerm)
    porNoVisor("zerar"); 
    let comOperando = domQS("#calculo", 1, result)
    return result;
}

export const definirOperador = (p, q)=>{
    let operador = "";
    let result = "";
    let finalTerm = q[q.length - 1];
    console.log(finalTerm + " <finalTerm>")
    switch(p){
        case "soma": operador = " +"; break;
        case "subt": operador = " -"; break;
        case "mult": operador = " x"; break;
        case "divi": operador = " /"; break;
    }
    result = q + operador;
    return result;
}

export const calcular = ()=>{
    var result = new Equacao("nada", "coisa alguma")
    return result.calcular();
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
