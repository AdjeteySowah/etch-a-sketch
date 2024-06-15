
    // || SIDEBAR

let colorInput = document.querySelector("#color-picker");

let colorMode = document.querySelector(".color-mode");

function updateBgColorAndCSS() {
    colorMode.style.backgroundColor = colorInput.value;
        // the rest of the code in this function does not necessarily assign the gridCells their bgcolor, instead it enforces that they keep a particular color(in the stylesheet) as their bgcolor. Their bgcolor is actually assigned to them in the color function.
    const styleSheet = document.styleSheets[0];
    let coloredGridCells = document.querySelectorAll(".new-color");

    for (let i = 0; i < styleSheet.cssRules.length; i++) {
        let rule = styleSheet.cssRules[i];

        if (rule.selectorText === ".new-color") {
            if (!coloredGridCells.length) {
                rule.style.backgroundColor = colorInput.value;
            }
        }
    }
}

colorInput.addEventListener("input", updateBgColorAndCSS);

let buttons = Array.from(document.querySelectorAll(".sidebar-btn"));
let buttonsNot1stOne = buttons.filter((button) => !(button.classList.contains("color-mode")));
let buttonsNot2ndOne = buttons.filter((button) => !(button.classList.contains("rainbow-mode")));
let buttonsNot3rdOne = buttons.filter((button) => !(button.classList.contains("eraser")));
let buttonsNot4thOne = buttons.filter((button) => !(button.classList.contains("clear")));

buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        if (button.classList.contains("color-mode")) {
            for(let i = 0; i < buttonsNot1stOne.length; i++) {
                buttonsNot1stOne[i].style.backgroundColor = "rgb(255, 255, 255)";
                buttonsNot1stOne[i].style.color = "rgba(0, 0, 0, 0.7)";
                buttonsNot1stOne[i].style.borderColor = "rgba(0, 0, 0, 0.7)";
            }
            event.target.style.backgroundColor = colorInput.value;
            event.target.style.color = "rgb(255, 255, 255)";

            colorOnMouseover();
        } else if (button.classList.contains("rainbow-mode")) {
            for(let i = 0; i < buttonsNot2ndOne.length; i++) {
                buttonsNot2ndOne[i].style.backgroundColor = "rgb(255, 255, 255)";
                buttonsNot2ndOne[i].style.color = "rgba(0, 0, 0, 0.7)";
                buttonsNot2ndOne[i].style.borderColor = "rgba(0, 0, 0, 0.7)";
            }
            event.target.style.backgroundColor = colorInput.value;
            event.target.style.color = "rgb(255, 255, 255)";
        } else if (button.classList.contains("eraser")) {
            for(let i = 0; i < buttonsNot3rdOne.length; i++) {
                buttonsNot3rdOne[i].style.backgroundColor = "rgb(255, 255, 255)";
                buttonsNot3rdOne[i].style.color = "rgba(0, 0, 0, 0.7)";
                buttonsNot3rdOne[i].style.borderColor = "rgba(0, 0, 0, 0.7)";
            }
            event.target.style.backgroundColor = colorInput.value;
            event.target.style.color = "rgb(255, 255, 255)";

            decolorizeOnMouseover();
        } else {
            for(let i = 0; i < buttonsNot4thOne.length; i++) {
                buttonsNot4thOne[i].style.backgroundColor = "rgb(255, 255, 255)";
                buttonsNot4thOne[i].style.color = "rgba(0, 0, 0, 0.7)";
                buttonsNot4thOne[i].style.borderColor = "rgba(0, 0, 0, 0.7)";
            }
            event.target.style.backgroundColor = colorInput.value;
            event.target.style.color = "rgb(255, 255, 255)";
        } 
    });
});

function decolorize(event) {
    let gridCells = document.querySelectorAll(".grid-cell");
    gridCells.forEach((gridCell) => {
        gridCell.classList.remove("new-color");
    });

    event.target.style.backgroundColor = "rgb(255, 255, 255)";
}

function decolorizeOnMouseover() {
    let gridCells = document.querySelectorAll(".grid-cell");
    gridCells.forEach((gridCell) => {
        gridCell.addEventListener("mouseover", decolorize);
    });
}


    // || CONTAINER

let gridCellsContainer = document.querySelector(".inner-container");    

function color(event) {
    let gridCells = document.querySelectorAll(".grid-cell");
    gridCells.forEach((gridCell) => {
        gridCell.classList.remove("new-color");
    });

    event.target.style.backgroundColor = colorInput.value;
    event.target.classList.add("new-color");
}

function colorOnMouseover() {
    let gridCells = document.querySelectorAll(".grid-cell");
    gridCells.forEach((gridCell) => {
        gridCell.addEventListener("mouseover", color);
    });
}    
    
function createDefaultGrids () {
    for (let i = 1; i <= 400; i++) {
        let gridCell = document.createElement("div");
        gridCell.className = "grid-cell";
        gridCell.style.cssText = `width: 24px;
                                  height: 24px;`;
        gridCellsContainer.appendChild(gridCell);
    }

    // colorOnMouseover();
}

createDefaultGrids();

let rangeLabel = document.querySelector(".grid-cell-range");
let range = document.querySelector("#grid-cell-range");

    // R = rangeLabel, G = gridCellSize, N = numberOfGridCells 
function updateRGN () {
    gridCellsContainer.innerHTML = "";
    
    if (range.value < 21) {
        rangeLabel.innerHTML = "8 &times; 8";
        for (let i = 1; i <= 3600; i++) {
            let gridCell = document.createElement("div");
            gridCell.className = "grid-cell";
            gridCell.style.cssText = `width: 8px;
                                      height: 8px;`;
            gridCellsContainer.appendChild(gridCell);
        }
    } else if (range.value > 20 && range.value < 41) {
        rangeLabel.innerHTML = "16 &times; 16";
        for (let i = 1; i <= 900; i++) {
            let gridCell = document.createElement("div");
            gridCell.className = "grid-cell";
            gridCell.style.cssText = `width: 16px;
                                      height: 16px;`;
            gridCellsContainer.appendChild(gridCell);
        }
    } else if (range.value > 40 && range.value < 61) {
        rangeLabel.innerHTML = "24 &times; 24";
        for (let i = 1; i <= 400; i++) {
            let gridCell = document.createElement("div");
            gridCell.className = "grid-cell";
            gridCell.style.cssText = `width: 24px;
                                      height: 24px;`;
            gridCellsContainer.appendChild(gridCell);
        }
    } else if (range.value > 60 && range.value < 81) {
        rangeLabel.innerHTML = "32 &times; 32";
        for (let i = 1; i <= 225; i++) {
            let gridCell = document.createElement("div");
            gridCell.className = "grid-cell";
            gridCell.style.cssText = `width: 32px;
                                      height: 32px;`;
            gridCellsContainer.appendChild(gridCell);
        }
    } else {
        rangeLabel.innerHTML = "40 &times; 40";
        for (let i = 1; i <= 144; i++) {
            let gridCell = document.createElement("div");
            gridCell.className = "grid-cell";
            gridCell.style.cssText = `width: 40px;
                                      height: 40px;`;
            gridCellsContainer.appendChild(gridCell);
        }
    }

    // colorOnMouseover();
}


// || CROSS-SECTIONAL IMPACT

range.addEventListener("input", updateRGN);