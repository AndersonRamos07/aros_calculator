const dot = document.querySelector("#dot");

const dotar = (digit, pVisor) => {
    let resp;
    for(var i = 0; i > pVisor.length; i++){
        if(pVisor[i] == digit){
            resp = true;
        }
        else{
            resp = false;
        }
    }
    return resp;
};