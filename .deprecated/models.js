export default class Operacao {
    constructor(tPrimeiro, tSegundo, tSinal){
        this.primeiro = parseInt(tPrimeiro, 10)
        this.segundo = parseInt(tSegundo, 10)
        this.sinal = tSinal
    }
    getSinal(){
        let sinal;
        switch(this.sinal){
            case "soma" : sinal = "+"
            break;
            case "subt" : sinal = "-"
            break;
            case "mult" : sinal = "x"
            break;
            case "divi" : sinal = ":"
            break;
        }
        return sinal;
    }
    setSinal(tSinal){
        this.sinal = tSinal
        return console.log("Sinal alterado!")
    }
    somar(){ return this.primeiro + this.segundo; }
    subtrair(){ return this.primeiro - this.segundo; }
    multiplicar(){ return this.primeiro * this.segundo; }
    dividir(){ return this.primeiro / this.segundo; }
    equacionar(){
        var equacao;
        switch(this.sinal){
            case 'soma': equacao = this.somar()
                break;
            case 'subt': equacao = this.subtrair()
                break;
            case 'mult': equacao = this.multiplicar()
                break;
            case 'divi': equacao = this.dividir();
        }
        return equacao;
    }
}

export class Equacao {
    constructor (elementos, operadores){
        this.elementos = elementos,
        this.operadores = operadores
    }
    calcular(){
        console.log("aqui será realizado o calculo")
        console.info(this.elementos, this.operadores)
    }
}

export class Elemento {
    constructor(algarismo){ this.elemento = parseInt(algarismo) }
    getElemento(){ return this.elemento }
    setElemento(algarismo){ this.elemento = algarismo }
    getSinal(){
        let sinal = Math.sign(this.elemento);
        if(sinal == -1){ return "-"}
        else{return "+"}
    }
    setSinal(){ return this.elemento * -1; }
}

export class Operador {
    constructor(operador){
        this.operador = operador
    }
    getOperador(){
        return this.operador
    }
    setOperador(operador){
        this.operator = operador;
        return console.log("alterado para..." + this.operador)
    }
}

//definirOperador(get and set) nos operadores

//elementos(get and set) neles e em seu conjunto numerico (naturais ou inteiros) sendo positivo ou negativo

//definirEquacao(get and set) na equacao completa, com todos seus elementos, operadores e seu resultado

//resultado(get) calculo com todos seus elementos e operadores
