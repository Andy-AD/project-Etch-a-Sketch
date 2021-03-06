const containerSize = window.innerHeight - 100;
const button = document.querySelector('.numberOfSquares');
const container = document.querySelector('.container');
container.style.cssText = `height: ${containerSize}px; width: ${containerSize}px;`;

let boxes = getBoxesPerGrid(16);
let size = getBoxSize(16)
makeGrid(boxes, size);

container.addEventListener('mouseover', containerHandler);
button.addEventListener('click', buttonHandler);

function containerHandler() {
    const grid = document.querySelectorAll('.box');
    grid.forEach(box => {
        box.addEventListener('mouseover', changeColorOnHover);
    });
}

function buttonHandler() {
    let boxesPerSide = 101;
    while (boxesPerSide >= 100) {
        boxesPerSide = prompt('Enter number of boxes per side less than 100');
    }
    let size = getBoxSize(boxesPerSide);
    let boxes = getBoxesPerGrid(boxesPerSide);
    container.replaceChildren();
    makeGrid(boxes, size);
}

function getBoxesPerGrid(boxesPerSide) {
    return boxesPerSide * boxesPerSide;
}

function getBoxSize(boxesPerSide) {
    return containerSize / boxesPerSide;
}

function makeGrid(numberOfBoxes, size) {
    for (i = 1; i <= numberOfBoxes; i++) {
        let box = document.createElement('div');
        box.style.cssText = `width: ${size}px; height: ${size}px;`
        box.classList.add(`box`);
        box.classList.add(`number${i}`);
        container.appendChild(box);
    }
}

function changeColorOnHover(e) {
    let boxCurrentlyOver = document.querySelector(`.${e.target.classList[1]}`);
    boxCurrentlyOver.style.backgroundColor = randomColorRGB();
}
function randomColorRGB() {
    let r = randomNumberFrom1to255();
    let g = randomNumberFrom1to255();
    let b = randomNumberFrom1to255();
    return `rgb(${r},${g},${b})`;
}

function randomNumberFrom1to255 () {
    return (Math.floor(Math.random()*256));
}