const onOff = (id) => document.querySelector(id).checked;

const getContent = () => {
    let content = document.querySelector("#painelPrincipal").innerHTML;
    switch(content){
        case "off": false; break;
        case "0": false; break;  
    }                       
};

const show = () => {
    let content = getContent();
    content == "off"? 0: "foi";
}

const getNumber = (digito) => {
    getContent()
};
