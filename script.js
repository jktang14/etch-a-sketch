container = document.querySelector(".container");
for (let i = 0; i < 256; i++) {
    cells = document.createElement('div');
    cells.classList.add('grid-item');
    container.appendChild(cells);
}

input = document.querySelector('button');
// Prompt user when button is clicked
function promptUser() {
    do {
        squares = prompt("Input how many squares you want on each side! It must be 100 and less!");
    }
    while (squares > 100);
    return squares;
}

function handleInput() {
    // Remove all the divs
    squares = promptUser();
    divs = document.querySelectorAll('.grid-item');
    divs.forEach((element) => container.removeChild(element));
    
    container.style.gridTemplateColumns = `repeat(${squares}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${squares}, 1fr)`;

    // add new divs
    for (let i = 0; i < squares ** 2; i++) {
        cells = document.createElement('div');
        cells.classList.add('grid-item');
        container.appendChild(cells);
    }

    check();
}
input.addEventListener('click', handleInput);

// Gives node list of grid items
function check() {
    item = document.querySelectorAll(".grid-item");
    value1 = Math.floor(Math.random() * 256)
    value2 = Math.floor(Math.random() * 256)
    value3 = Math.floor(Math.random() * 256)
    function changeColor(e) {
        // Random RGB values
        value1 = Math.floor(Math.random() * 256)
        value2 = Math.floor(Math.random() * 256)
        value3 = Math.floor(Math.random() * 256)
        this.style.backgroundColor = `rgb(${value1}, ${value2}, ${value3})`;
        console.log(this.style);
    }
    
    item.forEach((element) => element.addEventListener('mouseover', changeColor));
}

check();
