class Algharism
{
    constructor(value)
    {
        this.value = parseFloat(value)
    }
    get()
    {
        return this.value;
    }
    set(value)
    {
        this.value = parseFloat(value)
    }
    toLog()
    {
        log(this.value)
    }
};

class Equation {
    constructor(pAlgharism){
        this.value = pAlgharism;
        this.values = []    
    }
    toPush(value){
        this.values.push(value)
    }
}
