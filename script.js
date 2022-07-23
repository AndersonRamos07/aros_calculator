function domQS(p,q,v) {
    if(q == 0){
        var result = document.querySelector(p).innerHTML; 
    return result;
    }else if(q == 1){
        return document.querySelector(p).innerHTML = v;
    }
  else{
      console.log(`parâmetros: ${p}, ${q}, ${v}`)
      alert("Se liga nos parâmetros!")
  }
}

const insereNum = (p)=>{
  var vis = mostraNoVisor();
  if(vis){ domQS("#valor", 1, p) }
  else{ porNoVisor(p); }
}

const mostraNoVisor = ()=>{
  var now = domQS("#valor", 0, 0);
  if(now == 0 || now == "off") return true
  else {return false};
}

const porNoVisor = (p)=>{
    var valueBefore = domQS("#valor", 0, 0);
    var valueFinal = valueBefore.concat(p)
    return domQS("#valor", 1, valueFinal)//document.querySelector("#valor").innerHTML = valueFinal;
}

const cSomente = ()=>{
 return domQS("#valor", 1, 0)
  //document.querySelector("#valor").innerHTML = 0;
}

const cEE = ()=>{
  var dut = domQS("#valor", 0, 0)
  //document.querySelector("#valor").innerHTML;
  //console.log(dut.length + " <dut.length>")
  var resultar = dut.slice(0, -1)
  return domQS("#valor", 1, resultar)
  //document.querySelector("#valor").innerHTML = resultar;
  //console.log(resultar + " <resultar>")
}

const operacao = (p)=>{
    var initialTerm = domQS("#valor", 1, 0);
    
}

const calcular = ()=>{
    
}
