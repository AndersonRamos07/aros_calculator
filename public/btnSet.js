let width = window.screen.width;
let height = window.screen.height;

const orientation = () => {
    let orientation = "";
    width > height?
    orientation = "landscape":
    orientation = "portrait";
    return document.querySelector("#orientation")
    .innerHTML = orientation;
};