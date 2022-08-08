export default class Equacao {
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
    constructor(algarismo){
        this.elemento = algarismo
    }
    getElemento(){
        return this.elemento
    }
    setElemento(algarismo){
        this.elemento = algarismo
        console.log(this.elemento + " formatado!")
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
        this.operator = "-";
        return console.log("alterado! ("+ this.operador + ")")
    }
}

//definirOperador(get and set) nos operadores

//elementos(get and set) neles e em seu conjunto numerico (naturais ou inteiros) sendo positivo ou negativo

//definirEquacao(get and set) na equacao completa, com todos seus elementos, operadores e seu resultado

//resultado(get) calculo com todos seus elementos e operadores
