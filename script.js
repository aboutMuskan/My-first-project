let array = [];

let comparisons = 0;

let swaps = 0;

const generateBtn =
document.getElementById("generate");

const sizeSlider =
document.getElementById("size");

function generateArray(){

    comparisons = 0;
    swaps = 0;

    document.getElementById("comparisons")
    .innerText = 0;

    document.getElementById("swaps")
    .innerText = 0;

    array = [];

    for(let i = 0; i < sizeSlider.value; i++){

        array.push(
            Math.floor(Math.random() * 400) + 20
        );
    }

    renderBars(array);

    document.getElementById("arraySize")
    .innerText = array.length;
}

generateBtn.addEventListener(
    "click",
    generateArray
);

sizeSlider.addEventListener(
    "input",
    generateArray
);

generateArray();