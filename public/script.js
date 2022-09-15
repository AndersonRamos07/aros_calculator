let width = window.innerWidth;
let height = window.innerHeight;

const orientation = () => {
    let orientation = "";
    width > height?
    orientation = "landscape":
    orientation = "portrait";
    return document.querySelector("#orientation")
    .innerHTML = orientation;
};