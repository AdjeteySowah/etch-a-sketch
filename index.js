
let gridCellsContainer = document.querySelector(".inner-container");

function createDefaultGrids () {
    for (let i = 1; i <= 400; i++) {
        let gridCell = document.createElement("div");
        gridCell.className = "grid-cell";
        gridCell.style.cssText = `width: 24px;
                                  height: 24px;`;
        gridCellsContainer.appendChild(gridCell);
    }

    attachEventListeners();
}

createDefaultGrids();

function attachEventListeners() {
    let gridCellNodes = document.querySelectorAll(".grid-cell");
    gridCellNodes.forEach((gridCellNode) => {
        gridCellNode.addEventListener("mouseover", changeColor);
    });
}

function changeColor(event) {
    document.querySelectorAll(".grid-cell").forEach(gridCell => {
        gridCell.classList.remove("new-color");
    });

    event.target.style.backgroundColor = colorInput.value;
    event.target.classList.add("new-color");
}

let colorInput = document.querySelector("#color-picker");

function updateGridBgColor() {
    let colorMode = document.querySelector(".color-mode");
    colorMode.style.backgroundColor = colorInput.value;

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

colorInput.addEventListener("input", updateGridBgColor);

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

    attachEventListeners();
}

range.addEventListener("input", updateRGN);