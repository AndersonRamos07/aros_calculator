export default class Operacao {
    constructor(primeiro, segundo, sinal){
        this.primeiro = parseInt(primeiro, 10)
        this.segundo = parseInt(segundo, 10)
        this.sinal = sinal
    }
    setSinal(sinal){
        this.sinal = sinal
        return console.log("Sinal alterado!")
    }
    somar(){
        var resultado =  this.primeiro + this.segundo;
        console.log(`${this.primeiro} + ${this.segundo} = ${resultado}`)
        return resultado;
    }
    subtrair(){
        var resultado =  this.primeiro - this.segundo;
        console.log(`${this.primeiro} - ${this.segundo} = ${resultado}`)
        return resultado;
    }
    multiplicar(){
        var resultado =  this.primeiro * this.segundo;
        console.log(`${this.primeiro} * ${this.segundo} = ${resultado}`)
        return resultado;
    }
    dividir(){
        var resultado =  this.primeiro / this.segundo;
        console.log(`${this.primeiro} : ${this.segundo} = ${resultado}`)
        return resultado;
    }
    equacionar(){
        var equacao = 0;
        switch(this.sinal){
            case 'soma':
                equacao = this.somar()
                break;
            case 'subt':
                equacao = this.subtrair()
                break;
            case 'mult':
                equacao = this.multiplicar()
                break;
            case 'divi':
                equacao = this.dividir();
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
    constructor(algarismo, sinal){
        this.elemento = algarismo
        this.sinal = sinal
    }
    getElemento(){
        return this.elemento
    }
    setElemento(algarismo){
        this.elemento = algarismo
        console.log(this.elemento + " formatado!")
    }
    getSinal(){
        return this.sinal
    }
    setSinal(sinal){
        this.sinal = sinal
        console.log(this.sinal + " alterado!")
    }
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
