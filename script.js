const DEFUALT_MODE = 'color'
const DEFAULT_COLOR = '#000000'
const DEFAULT_SIZE = 25

let currentMode = DEFUALT_MODE
let currentColour = DEFAULT_COLOR
let currentSize = DEFAULT_SIZE


const colorPicker = document.getElementById('colorPicker');
const colorButton = document.getElementById('colorBtn');
const rainbowButton = document.getElementById('rainbowBtn');
const eraserButton = document.getElementById('eraserBtn');
const clearButton = document.getElementById('clearBtn');
const sizeValue = document.getElementById('sizeValue');
const sizeSlider = document.getElementById('sizeSlider');
const grid = document.getElementById('grid');

colorPicker.oninput = (e) => setCurrentColor(e.target.value);
colorButton.onclick = () => setCurrentMode('color');
rainbowButton.onclick = () => setCurrentMode('rainbow');
eraserButton.onclick = () => setCurrentMode('eraser');
clearButton.onclick = () => reloadGrid();
sizeSlider.onmousemove = (e) => setNewSize(e.target.value);
sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value);

function setNewSize(newSize) {
    currentSize == newSize
}

function setCurrentColor(newColour){
    currentColour = newColour
}

function setCurrentMode(newMode) {
    currentMode = newMode
}

function updateSizeValue(newValue) {
    sizeValue.innerHTML = `${newValue} x ${newValue}`
}

function reloadGrid() {
    clearGrid()
    setupGrid(currentSize)
}

function setupGrid(size) {
    grid.style.gridTemplateColumns = repeat(${size}, 1fr)
    grid.style.gridTemplateRows = repeat(${size}, 1fr)
}


